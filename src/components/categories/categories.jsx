import { ArrowRight } from "lucide-react";
import styles from "./categories.module.css";
import { LINES } from "../../utils/lines";

/** "Explorá por línea": una tarjeta con foto por cada línea y la cantidad de productos. */
const Categories = ({ products }) => (
  <section className={styles.section} aria-labelledby="lineas-title">
    <div className={styles.head}>
      <h2 id="lineas-title" className={styles.title}>
        Explorá por línea
      </h2>
    </div>

    <ul className={styles.grid}>
      {LINES.map((line) => {
        const items = products.filter((p) => p.line === line.id);
        if (items.length === 0) return null;
        return (
          <li key={line.id}>
            <a href={`#${line.id}`} className={styles.card}>
              <img src={items[0].coverImage} alt="" className={styles.photo} loading="lazy" />
              <span className={styles.label}>
                <span className={styles.name}>{line.title}</span>
                <span className={styles.count}>
                  {items.length} {items.length === 1 ? "producto" : "productos"}
                </span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Categories;
