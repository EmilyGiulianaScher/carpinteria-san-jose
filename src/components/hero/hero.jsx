import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";
import { CLIENT_CONFIG } from "../../config";

/**
 * Portada. El foco es la carpinteria: un mueble sobre un circulo de color, titulo y acceso a
 * Muebles. La foto es la que el cliente cargo en la planilla, sin modificar.
 */
const Hero = ({ products }) => {
  const cover = products.find((p) => p.line === "muebles")?.coverImage;

  return (
    <header className={styles.hero}>
      <div className={styles.visual}>
        <div className={styles.circle} aria-hidden="true" />
        {cover && <img src={cover} alt="" className={styles.photo} loading="eager" />}
      </div>

      <div className={styles.text}>
        <p className={styles.kicker}>{CLIENT_CONFIG.storeName}</p>
        <h1 className={styles.title}>
          Muebles de madera <em>hechos a medida</em>
        </h1>
        <p className={styles.lead}>
          Escritorios, mesas y más, fabricados en Corrientes. Diseños pensados para cada espacio.
        </p>
        <a href="#muebles" className={styles.cta}>
          Ver muebles
          <span className={styles.ctaIcon} aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
