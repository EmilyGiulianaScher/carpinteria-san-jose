// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import styles from './productCard.module.css'; // <--- Importamos los estilos aquí

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, inStock, coverImage, category } = product;
  const hasDiscount = oldPrice > price;

  return (
    <div className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      
      {/* 1. ZONA DE IMAGEN */}
      <div className={styles.imageContainer}>
        <img 
          src={coverImage || 'https://via.placeholder.com/300'} 
          alt={name}
          className={styles.image}
        />
        
        {!inStock && (
          <div className={styles.stockBadge}>
            AGOTADO
          </div>
        )}
      </div>

      {/* 2. ZONA DE INFO */}
      <div className={styles.info}>
        <small className={styles.category}>
          {category}
        </small>
        
        <h3 className={styles.title}>
          {name}
        </h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.price}>
            ${price.toLocaleString()}
          </span>
          
          {hasDiscount && (
            <span className={styles.oldPrice}>
              ${oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;