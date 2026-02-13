import React, { useState, useEffect } from "react";
import styles from "./heroCarousel.module.css";

const HeroCarousel = ({ featuredProducts, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!featuredProducts || featuredProducts.length === 0) return null;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const getCardClass = (index) => {
    if (index === activeIndex) return styles.active;

    const prevIndex =
      (activeIndex - 1 + featuredProducts.length) % featuredProducts.length;
    const nextIndex = (activeIndex + 1) % featuredProducts.length;

    if (index === prevIndex) return styles.prev;
    if (index === nextIndex) return styles.next;

    return styles.hidden;
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.navButton} ${styles.btnPrev}`}
        onClick={handlePrev}
      >
        &#10094;
      </button>

      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className={`${styles.card} ${getCardClass(index)}`}
          onClick={() => {
            if (index === activeIndex) onSelect(product);
            else setActiveIndex(index);
          }}
        >
          <div className={styles.imageContainer}>
            <img
              src={product.coverImage}
              alt={product.name}
              className={styles.image}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>{product.name}</h3>
            <div className={styles.price}>
              ${product.price.toLocaleString()}
            </div>
            {index === activeIndex && (
              <div className={styles.cta}>Ver Detalle</div>
            )}
          </div>
        </div>
      ))}

      <button
        className={`${styles.navButton} ${styles.btnNext}`}
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroCarousel;
