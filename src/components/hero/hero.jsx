import styles from "./hero.module.css";
import { LINES } from "../../utils/lines";
import { CLIENT_CONFIG } from "../../config";

/**
 * Portada: dos paneles, uno por linea. La foto de cada panel es la del primer producto de esa
 * linea (la misma que el cliente cargo en la planilla, sin modificar).
 */
const Hero = ({ products }) => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.srOnly}>{CLIENT_CONFIG.storeName}</h1>
      {LINES.map((line) => {
        const cover = products.find((p) => p.line === line.id)?.coverImage;
        return (
          <a
            key={line.id}
            href={`#${line.id}`}
            data-line={line.id}
            className={styles.panel}
          >
            {cover && (
              <img src={cover} alt="" className={styles.photo} loading="eager" />
            )}
            <div className={styles.text}>
              <p className={styles.kicker}>Diseños a medida</p>
              <h2 className={styles.title}>{line.title}</h2>
              <p className={styles.tagline}>{line.tagline}</p>
              <span className={styles.cta}>{line.cta}</span>
            </div>
          </a>
        );
      })}
    </header>
  );
};

export default Hero;
