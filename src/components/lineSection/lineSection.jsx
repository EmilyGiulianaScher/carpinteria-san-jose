import styles from "./lineSection.module.css";
import ProductCard from "../productCard/productCard";

const RIBBON_TEXT = "ENVÍOS A TODO EL PAÍS • DISEÑOS A MEDIDA • ";

/**
 * Cinta ondulada decorativa entre el titulo y los productos (la misma forma en las dos lineas;
 * cambia el color segun la linea). Es solo decoracion (aria-hidden).
 */
const Ribbon = ({ lineId }) => {
  const text = RIBBON_TEXT.repeat(8);
  const pathId = `${lineId}-wave`;

  return (
    <svg
      className={styles.ribbonWave}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id={pathId}
        d="M-20 62 C 200 28, 420 28, 640 62 S 1080 96, 1300 62 S 1500 34, 1560 52"
        fill="none"
        stroke="var(--l-accent)"
        strokeWidth="46"
      />
      <text className={styles.waveText} dy="6">
        <textPath href={`#${pathId}`}>{text}</textPath>
      </text>
    </svg>
  );
};

const LineSection = ({ line, products, onSelect }) => {
  if (products.length === 0) return null;

  return (
    <section
      id={line.id}
      data-line={line.id}
      className={styles.section}
      aria-labelledby={`${line.id}-title`}
    >
      <div className={styles.head}>
        <h2 id={`${line.id}-title`} className={styles.title}>
          {line.title}
        </h2>
        <p className={styles.tagline}>{line.tagline}</p>
      </div>

      <Ribbon lineId={line.id} />

      <div className={styles.inner}>
        <ul className={styles.grid}>
          {products.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                className={styles.cardButton}
                onClick={() => onSelect(product)}
                aria-label={`Ver ${product.name}`}
              >
                <ProductCard product={product} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LineSection;
