import { useState } from "react";
import { X } from "lucide-react";
import styles from "./productModal.module.css";
import { formatPrice } from "../../utils/price";
import { CLIENT_CONFIG } from "../../config";

const ProductModal = ({ product, allProducts, onClose, onSelect }) => {
  // El estado se reinicia solo: App monta el modal con key={product.id}.
  const [activeImage, setActiveImage] = useState(product?.coverImage);

  if (!product) return null;

  const relatedProducts = allProducts
    ? allProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3)
    : [];

  const message = `Hola! Me interesa el producto: ${product.name}. ¿Tienen stock?`;
  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.overlay} data-line={product.line} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* COLUMNA IZQ: FOTOS */}
        <div className={styles.galleryColumn}>
          <div className={styles.mainImageContainer}>
            <img
              src={activeImage}
              alt={product.name}
              className={styles.mainImage}
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={`${styles.thumb} ${activeImage === img ? styles.activeThumb : ""}`}
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
            <div className={styles.price}>{formatPrice(product.price)}</div>
            <p className={styles.description}>
              {product.description || "Sin descripción."}
            </p>
            {product.dimensions && (
              <p style={{ marginBottom: "20px", color: "#666" }}>
                <strong>Medidas:</strong> {product.dimensions}
              </p>
            )}

            {product.inStock ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                Consultar este trabajo
              </a>
            ) : (
              <div className={styles.noStock}>Producto Sin Stock</div>
            )}
          </div>

          {/* --- SECCIÓN NUEVA: RELACIONADOS --- */}
          {relatedProducts.length > 0 && (
            <div className={styles.relatedSection}>
              <h4 className={styles.relatedTitle}>
                También te puede interesar:
              </h4>
              <div className={styles.relatedGrid}>
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    className={styles.relatedCard}
                    onClick={() => onSelect(rel)} // Al hacer click, cambiamos el producto actual
                  >
                    <img src={rel.coverImage} alt={rel.name} />
                    <div>
                      <p className={styles.relatedName}>{rel.name}</p>
                      <span className={styles.relatedPrice}>
                        {formatPrice(rel.price)}
                      </span>
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
