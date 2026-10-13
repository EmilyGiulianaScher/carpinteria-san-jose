import React from "react";
import styles from "./footer.module.css";
import { CLIENT_CONFIG } from "../../config";
import { LINES } from "../../utils/lines";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>{CLIENT_CONFIG.storeName}</h3>
          <p className={styles.text}>
            Fabricación artesanal • Diseños personalizados. Envíos a todo el
            país y atención exclusiva.
          </p>
          <div className={styles.socialLinks}>
            {CLIENT_CONFIG.social.instagram && (
              <a
                href={CLIENT_CONFIG.social.instagram}
                target="_blank"
                className={styles.socialBtn}
              >
                <img
                  src="/social.png"
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
            )}
            {CLIENT_CONFIG.whatsappNumber && (
              <a
                href={`https://wa.me/${CLIENT_CONFIG.whatsappNumber}`}
                target="_blank"
                className={styles.socialBtn}
              >
                <img
                  src="/whatsapp (1).png"
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
            )}
          </div>
        </div>

        <div className={styles.column}>
          <h3>Categorías</h3>
          {LINES.map((line) => (
            <a key={line.id} href={`#${line.id}`} className={styles.link}>
              {line.title}
            </a>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Contacto</h3>
          <p className={styles.text}>📍 {CLIENT_CONFIG.contact.address}</p>

          {CLIENT_CONFIG.social.locationUrl && (
            <a
              href={CLIENT_CONFIG.social.locationUrl}
              target="_blank"
              style={{
                color: "var(--color-bg)",
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
