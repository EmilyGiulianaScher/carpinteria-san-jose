import { Heart, Mail, MapPin, Phone } from "lucide-react";
import styles from "./footer.module.css";
import { CLIENT_CONFIG } from "../../config";
import { LINES } from "../../utils/lines";

const Footer = () => {
  const { address, phone, email } = CLIENT_CONFIG.contact;
  const { instagram, locationUrl } = CLIENT_CONFIG.social;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.name}>{CLIENT_CONFIG.storeName}</h2>
          <p className={styles.text}>
            Fabricación artesanal y diseños personalizados. Envíos a todo el
            país y atención exclusiva.
          </p>
          <div className={styles.socialLinks}>
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                <img src="/social.png" alt="" className={styles.socialIcon} />
              </a>
            )}
            {CLIENT_CONFIG.whatsappNumber && (
              <a
                href={`https://wa.me/${CLIENT_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="WhatsApp"
              >
                <img
                  src="/whatsapp (1).png"
                  alt=""
                  className={styles.socialIcon}
                />
              </a>
            )}
          </div>
        </div>

        <nav className={styles.column} aria-label="Secciones">
          <h3 className={styles.heading}>Secciones</h3>
          {LINES.map((line) => (
            <a key={line.id} href={`#${line.id}`} className={styles.link}>
              {line.title}
            </a>
          ))}
          <a href="#nosotros" className={styles.link}>
            Nosotros
          </a>
          <a href="#contacto" className={styles.link}>
            Contacto
          </a>
        </nav>

        <div className={styles.column}>
          <h3 className={styles.heading}>Contacto</h3>
          <ul className={styles.contactList}>
            {address && (
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{address}</span>
              </li>
            )}
            {phone && (
              <li>
                <Phone size={18} aria-hidden="true" />
                <span>{phone}</span>
              </li>
            )}
            {email && (
              <li>
                <Mail size={18} aria-hidden="true" />
                <span>{email}</span>
              </li>
            )}
          </ul>
          {locationUrl && (
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Ver en Google Maps
            </a>
          )}
        </div>
      </div>

      <div className={styles.copyright}>
        <span>
          © {new Date().getFullYear()} {CLIENT_CONFIG.storeName}. Todos los
          derechos reservados.
        </span>
        <span className={styles.credit}>
          Diseñado con{" "}
          <Heart size={14} aria-label="amor" className={styles.heart} /> por
          StockNow
        </span>
      </div>
    </footer>
  );
};

export default Footer;
