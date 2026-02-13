import React, { useState } from "react";
import styles from "./contactSection.module.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Muebles",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Carpintería San José!:) \n\nMi nombre es *${formData.name}*.\nQuiero consultar por un proyecto de: *${formData.category}*.\n\n *Mensaje:*\n${formData.message}\n\n(Mi correo es: ${formData.email})`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${5493794223735}?text=${encodedText}`;

    window.open(waUrl, "_blank");
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <span className={styles.overline}>HABLEMOS</span>
          <h2 className={styles.title}>Comienza tu Proyecto</h2>
          <p className={styles.description}>
            Tenes una visión en mente? Nos encantaría escucharla! Escribinos y
            le damos vida a tus ideas en madera.
          </p>
        </div>

        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                required
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <select
              name="category"
              className={styles.select}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Muebles a Medida">Muebles a Medida</option>
              <option value="Restauración">Restauración</option>
              <option value="Decoración">Decoración</option>
              <option value="Otro">Otro</option>
            </select>

            <textarea
              name="message"
              placeholder="Contanos sobre tu proyecto..."
              required
              rows="4"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje a WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
