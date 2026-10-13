import styles from "./hero.module.css";
import { LINES } from "../../utils/lines";
import { CLIENT_CONFIG } from "../../config";

/**
 * Portada. El foco es la carpinteria: un mueble sobre un circulo de color, titulo y acceso a
 * Muebles. Debajo, una franja con las dos lineas (Muebles y Hogar). Las fotos son las que el
 * cliente cargo en la planilla, sin modificar.
 */
const Hero = ({ products }) => {
  const firstOf = (lineId) => products.find((p) => p.line === lineId);
  const cover = firstOf("muebles")?.coverImage;

  return (
    <header>
      <div className={styles.hero}>
        <div className={styles.visual}>
          <div className={styles.circle} aria-hidden="true" />
          {cover && <img src={cover} alt="" className={styles.photo} loading="eager" />}
        </div>

        <div className={styles.text}>
          <p className={styles.kicker}>{CLIENT_CONFIG.storeName}</p>
          <h1 className={styles.title}>
            Muebles de madera <strong>hechos a medida</strong>
          </h1>
          <p className={styles.lead}>
            Escritorios, mesas y más, fabricados en Corrientes. Diseños pensados para cada
            espacio.
          </p>
          <a href="#muebles" className={styles.cta}>
            Ver muebles
          </a>
        </div>
      </div>

      <ul className={styles.strip}>
        {LINES.map((line) => {
          const thumb = firstOf(line.id)?.coverImage;
          return (
            <li key={line.id}>
              <a href={`#${line.id}`} className={styles.tile}>
                {thumb && <img src={thumb} alt="" className={styles.thumb} />}
                <span className={styles.tileText}>
                  <span className={styles.tileTitle}>{line.title}</span>
                  <span className={styles.tileTagline}>{line.tagline}</span>
                </span>
                <span className={styles.tileCta} aria-hidden="true">
                  Ver →
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Hero;
