// src/components/ProductModal/ProductModal.jsx
import React, { useState, useEffect } from 'react'; // <--- Importamos useEffect
import styles from './ProductModal.module.css';
import { CLIENT_CONFIG } from '../../config';

const ProductModal = ({ product, allProducts, onClose, onSelect }) => {
  if (!product) return null;

  // Estado de la imagen principal
  const [activeImage, setActiveImage] = useState(product.coverImage);

  // --- NUEVO: Resetear la imagen cuando cambia el producto ---
  // Esto es necesario porque si haces clic en un relacionado, el modal no se cierra,
  // solo cambia de datos, y necesitamos forzar que la foto grande cambie.
  useEffect(() => {
    setActiveImage(product.coverImage);
  }, [product]);

  // --- LÓGICA DE RELACIONADOS ---
  const relatedProducts = allProducts
    ? allProducts.filter(p => 
        p.category === product.category && // Misma categoría
        p.id !== product.id // Que no sea el mismo producto
      ).slice(0, 3) // Solo mostramos los primeros 3
    : [];

  // Link de WhatsApp
  const message = `Hola! Me interesa el producto: ${product.name}. ¿Tienen stock?`;
  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>

        {/* COLUMNA IZQ: FOTOS */}
        <div className={styles.galleryColumn}>
          <div className={styles.mainImageContainer}>
            <img src={activeImage} alt={product.name} className={styles.mainImage} />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, index) => (
                <img 
                  key={index} src={img} alt="thumb"
                  className={`${styles.thumb} ${activeImage === img ? styles.activeThumb : ''}`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* COLUMNA DER: INFO + RELACIONADOS */}
        <div className={styles.infoColumn}>
          <div>
            <div className={styles.category}>{product.category}</div>
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.price}>${product.price.toLocaleString()}</div>
            <p className={styles.description}>{product.description || "Sin descripción."}</p>
            {product.dimensions && (
              <p style={{marginBottom: '20px', color: '#666'}}>
                <strong>Medidas:</strong> {product.dimensions}
              </p>
            )}
            
            {product.inStock ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                Pedir por WhatsApp
              </a>
            ) : (
              <div className={styles.noStock}>Producto Sin Stock</div>
            )}
          </div>

          {/* --- SECCIÓN NUEVA: RELACIONADOS --- */}
          {relatedProducts.length > 0 && (
            <div className={styles.relatedSection}>
              <h4 className={styles.relatedTitle}>También te puede interesar:</h4>
              <div className={styles.relatedGrid}>
                {relatedProducts.map(rel => (
                  <div 
                    key={rel.id} 
                    className={styles.relatedCard}
                    onClick={() => onSelect(rel)} // Al hacer click, cambiamos el producto actual
                  >
                    <img src={rel.coverImage} alt={rel.name} />
                    <div>
                      <p className={styles.relatedName}>{rel.name}</p>
                      <span className={styles.relatedPrice}>${rel.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;