import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";

/** Corte de tronco dibujado en SVG (anillos con una leve deformacion), sin imagenes externas. */
const RINGS = Array.from({ length: 34 }, (_, i) => 18 + i * 17);

const LogTexture = () => (
  <svg
    className={styles.log}
    viewBox="0 0 600 700"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="log-base" cx="45%" cy="48%" r="75%">
        <stop offset="0" stopColor="#f0dcbc" />
        <stop offset="0.6" stopColor="#e2c093" />
        <stop offset="1" stopColor="#cf9f66" />
      </radialGradient>
      <filter id="log-wobble" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="2" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="46" />
      </filter>
    </defs>
    <rect width="600" height="700" fill="url(#log-base)" />
    <g filter="url(#log-wobble)" fill="none">
      {RINGS.map((r, i) => (
        <ellipse
          key={r}
          cx="270"
          cy="330"
          rx={r}
          ry={r * 1.08}
          stroke={i % 2 ? "#8a5226" : "#fff3dc"}
          strokeOpacity={i % 2 ? 0.4 : 0.5}
          strokeWidth={i % 3 === 0 ? 3.5 : 2}
        />
      ))}
    </g>
  </svg>
);

/**
 * Portada. El foco es la carpinteria: titulo y acceso a Muebles a la izquierda; a la derecha un
 * corte de tronco con el mueble que se sale hacia el texto. La foto es la que el cliente cargo
 * en la planilla, sin modificar (el fondo blanco se funde con "darken").
 */
const Hero = ({ products }) => {
  const cover = products.find((p) => p.line === "muebles")?.coverImage;

  return (
    <header className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span>Muebles de madera.</span>
          <span>Hechos a medida.</span>
        </h1>
        <p className={styles.lead}>
          Un taller de Corrientes donde cada mueble se fabrica a medida de tu espacio.
        </p>
        <a href="#muebles" className={styles.cta}>
          Ver muebles
          <span className={styles.ctaIcon} aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </a>
      </div>

      <div className={styles.visual}>
        <LogTexture />
        {cover && <img src={cover} alt="" className={styles.photo} loading="eager" />}
      </div>
    </header>
  );
};

export default Hero;
