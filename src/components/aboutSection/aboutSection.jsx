import styles from "./aboutSection.module.css";

/**
 * Sobre nosotros: foto a un lado y texto al otro. La foto es la de un producto de la planilla
 * (sin modificar); si se quiere una de Roberto en el taller, se pasa como `image`.
 */
const AboutSection = ({ image }) => {
  return (
    <section id="nosotros" className={styles.section} aria-labelledby="nosotros-title">
      {image && <img src={image} alt="" className={styles.photo} loading="lazy" />}

      <div className={styles.text}>
        <p className={styles.kicker}>Sobre nosotros</p>
        <h2 id="nosotros-title" className={styles.title}>
          Madera trabajada en Corrientes
        </h2>
        <p>
          Roberto trabaja la madera en Corrientes Capital desde hace más de 20 años. Cada mueble
          se fabrica a medida, a partir de lo que cada cliente necesita.
        </p>
        <p>La línea Hogar suma tapizados, almohadones y lonas de playa.</p>
        <a href="#contacto" className={styles.cta}>
          Pedí tu diseño
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
