import React from "react";
import styles from "./footer.module.css";
import { CLIENT_CONFIG } from "../../config";

const Footer = ({ categories, onCategorySelect }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>{CLIENT_CONFIG.storeName}</h3>
          <p className={styles.text}>
            La mejor calidad al mejor precio. Envíos a todo el país y atención
            personalizada.
          </p>
          <div className={styles.socialLinks}>
            {CLIENT_CONFIG.social.instagram && (
              <a
                href={CLIENT_CONFIG.social.instagram}
                target="_blank"
                className={styles.socialBtn}
              >
                📸
              </a>
            )}
            {CLIENT_CONFIG.social.facebook && (
              <a
                href={CLIENT_CONFIG.social.facebook}
                target="_blank"
                className={styles.socialBtn}
              >
                f
              </a>
            )}
            {CLIENT_CONFIG.whatsappNumber && (
              <a
                href={`https://wa.me/${CLIENT_CONFIG.whatsappNumber}`}
                target="_blank"
                className={styles.socialBtn}
              >
                💬
              </a>
            )}
          </div>
        </div>

        <div className={styles.column}>
          <h3>Categorías</h3>
          {categories.slice(0, 5).map(
            (cat) =>
              cat !== "Todos" && (
                <span
                  key={cat}
                  className={styles.link}
                  onClick={() => {
                    onCategorySelect(cat);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </span>
              )
          )}
        </div>

        <div className={styles.column}>
          <h3>Contacto</h3>
          <p className={styles.text}>📍 {CLIENT_CONFIG.contact.address}</p>
          <p className={styles.text}>📞 {CLIENT_CONFIG.contact.phone}</p>
          <p className={styles.text}>✉️ {CLIENT_CONFIG.contact.email}</p>

          {CLIENT_CONFIG.social.locationUrl && (
            <a
              href={CLIENT_CONFIG.social.locationUrl}
              target="_blank"
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              Ver en Google Maps →
            </a>
          )}
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} {CLIENT_CONFIG.storeName}. Todos los
        derechos reservados.
        <br />
        <small>Diseñado con ❤️ por StockNow </small>
      </div>
    </footer>
  );
};

export default Footer;
