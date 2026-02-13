import React from 'react';
import styles from './materialsSection.module.css'; 

const materials = [
  {
    id: 1,
    name: "Pino",
    description: "Ideal para muebles rústicos y luminosos.",
    image: "/pino.jpg" 
  },
  {
    id: 2,
    name: "Eucalipto",
    description: "Madera dura de tono rojizo. Alta resistencia y gran durabilidad.",
    image: "/eucalipto.avif"
  },
  {
    id: 3,
    name: "Roble",
    description: "Máxima dureza y elegancia atemporal.",
    image: "/roblee.jpg"
  }
];

const MaterialsSection = () => {
  return (
    <section className={styles.materialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nuestras Maderas</h2>
        <p className={styles.sectionSubtitle}>
          Trabajamos con materiales seleccionados para garantizar durabilidad y estilo.
        </p>
        
        <div className={styles.materialsGrid}>
          {materials.map((wood) => (
            <div key={wood.id} className={styles.materialCard}>
              <div className={styles.imageWrapper}>
                <img src={wood.image} alt={wood.name} />
              </div>
              <h3>{wood.name}</h3>
              <p>{wood.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;