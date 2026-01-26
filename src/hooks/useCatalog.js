// src/hooks/useCatalog.js
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { CLIENT_CONFIG } from '../config';

export const useCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- NUEVA ESTRATEGIA: PROXY DE CACHÉ (WESERV) ---
  const getCleanImage = (url) => {
    if (!url) return "https://via.placeholder.com/300?text=Sin+Imagen";

    // 1. Si ya es una imagen normal (termina en jpg, png), la dejamos
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      return url;
    }

    // 2. Detectamos si es de Google Drive para extraer el ID
    let id = null;
    const matchPath = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const matchParam = url.match(/id=([a-zA-Z0-9_-]+)/);

    if (matchPath) id = matchPath[1];
    else if (matchParam) id = matchParam[1];

    // 3. SI ENCONTRAMOS EL ID: Usamos el proxy de wsrv.nl
    if (id) {
      // Construimos la URL "cruda" de Drive
      const driveUrl = `https://drive.google.com/uc?id=${id}`;
      
      // La pasamos por el proxy de Weserv
      // &w=500 -> Redimensiona a 500px (carga más rápido)
      // &q=80  -> Calidad al 80% (optimización)
      return `https://wsrv.nl/?url=${encodeURIComponent(driveUrl)}&w=500&q=80&output=webp`;
    }

    return url;
  };

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        Papa.parse(CLIENT_CONFIG.googleSheetUrl, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const cleanData = results.data
              .filter(item => item.ID && item.Nombre)
              .map(item => {
                const img1 = getCleanImage(item['Foto_URL_1']);
                const img2 = getCleanImage(item['Foto_URL_2']);
                const img3 = getCleanImage(item['Foto_URL_3']);

                return {
                  id: item['ID'],
                  name: item['Nombre'],
                  description: item['Descripción'],
                  price: Number(item['Precio']),
                  category: item['Categoría'],
                  isFeatured: item['carrusel']?.toUpperCase() === 'TRUE',
                  inStock: item['Disponible']?.toUpperCase() !== 'FALSE',
                  oldPrice: Number(item['Precio_Anterior']) || 0,
                  dimensions: item['Medidas'],
                  order: Number(item['Orden']) || 999,
                  coverImage: img1,
                  images: [img1, img2, img3].filter(url => url && !url.includes("Sin+Imagen"))
                };
              })
              .sort((a, b) => a.order - b.order);

            setProducts(cleanData);
            setLoading(false);
          },
          error: (err) => {
            setError("Error cargando CSV: " + err.message);
            setLoading(false);
          }
        });
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  return { products, loading, error };
};