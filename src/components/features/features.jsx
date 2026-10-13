import { Hammer, MessageCircle, Ruler, Truck } from "lucide-react";
import styles from "./features.module.css";

/** Los cuatro puntos salen del texto del pie de pagina del sitio. */
const FEATURES = [
  {
    Icon: Hammer,
    title: "Fabricación artesanal",
    text: "Cada pieza se trabaja a mano",
  },
  {
    Icon: Ruler,
    title: "Diseños personalizados",
    text: "Hechos a medida de tu espacio",
  },
  {
    Icon: Truck,
    title: "Envíos a todo el país",
    text: "Coordinamos la entrega",
  },
  {
    Icon: MessageCircle,
    title: "Atención exclusiva",
    text: "Consultá directo por WhatsApp",
  },
];

const Features = () => (
  <section className={styles.wrap} aria-label="Por qué elegirnos">
    <ul className={styles.card}>
      {FEATURES.map((feature) => {
        const Icon = feature.Icon;
        const { title, text } = feature;
        return (
          <li key={title} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              <Icon size={22} strokeWidth={1.6} />
            </span>
            <strong className={styles.title}>{title}</strong>
            <span className={styles.text}>{text}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Features;
