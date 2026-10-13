import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";
import { formatPrice } from "../../utils/price";

/**
 * Portada. El foco es la carpinteria: titulo y acceso al catalogo a la izquierda; a la derecha,
 * un panel con el mueble destacado. Las miniaturas y la ficha flotante abren el producto, asi
 * la portada ya es parte del catalogo. Las fotos son las que el cliente cargo en la planilla,
 * sin modificar (el fondo blanco se funde con el del panel mediante "multiply").
 */
const Hero = ({ products, onSelect }) => {
  const furniture = products.filter((p) => p.line === "muebles");
  const featured = furniture[0];
  const thumbs = furniture.slice(0, 4);

  return (
    <header className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.kicker}>Carpintería en Corrientes</p>
        <h1 className={styles.title}>
          <span>Muebles de madera.</span>
          <span>Hechos a medida.</span>
        </h1>
        <p className={styles.lead}>
          Escritorios, mesas y más, fabricados a medida de tu espacio.
        </p>

        <div className={styles.actions}>
          <a href="#muebles" className={styles.cta}>
            Ver muebles
            <span className={styles.ctaIcon} aria-hidden="true">
              <ArrowRight size={16} />
            </span>
          </a>
          <a href="#contacto" className={styles.secondary}>
            Pedir un diseño
          </a>
        </div>

        {thumbs.length > 0 && (
          <ul className={styles.thumbs} aria-label="Muebles del catálogo">
            {thumbs.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  className={styles.thumb}
                  onClick={() => onSelect(product)}
                  aria-label={`Ver ${product.name}`}
                >
                  <img src={product.coverImage} alt="" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {featured && (
        <div className={styles.panel}>
          <img src={featured.coverImage} alt="" className={styles.photo} loading="eager" />
          <button type="button" className={styles.chip} onClick={() => onSelect(featured)}>
            <span className={styles.chipText}>
              <span className={styles.chipName}>{featured.name}</span>
              <span className={styles.chipPrice}>{formatPrice(featured.price)}</span>
            </span>
            <span className={styles.chipIcon} aria-hidden="true">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Hero;
