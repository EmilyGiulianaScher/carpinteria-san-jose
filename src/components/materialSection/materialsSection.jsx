import React from 'react';
// 1. Importar styles como objeto
import styles from './materialsSection.module.css'; 

const materials = [
  {
    id: 1,
    name: "Pino Tratado",
    description: "Ideal para muebles rústicos y luminosos. Económico y versátil con una textura suave.",
    // 2. Rutas corregidas: directo desde la raíz pública
    image: "/pino.jpg" 
  },
  {
    id: 2,
    name: "Eucalipto Grandis",
    description: "Madera dura de tono rojizo. Alta resistencia a la intemperie y gran durabilidad.",
    image: "/eucalipto.avif"
  },
  {
    id: 3,
    name: "Roble Natural",
    description: "Nuestra línea premium. Vetas marcadas, máxima dureza y elegancia atemporal.",
    image: "/roblee.jpg" // Asegúrate que el nombre sea exacto en tu carpeta public
  }
];

const MaterialsSection = () => {
  return (
    // 3. Usamos styles.nombreDeClase (adaptado a camelCase)
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
              <div className={styles.stars}>★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;