import { useState } from "react";
import styles from "./navBar.module.css";
import { CLIENT_CONFIG } from "../../config";
import { LINES } from "../../utils/lines";

const Navbar = ({ onSearch, searchTerm }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Principal">
      <a href="#inicio" className={styles.brand}>
        {CLIENT_CONFIG.logoUrl && (
          <img src={CLIENT_CONFIG.logoUrl} alt="" className={styles.logo} />
        )}
        <span>{CLIENT_CONFIG.storeName}</span>
      </a>

      <ul className={`${styles.links} ${isSearchOpen ? styles.hidden : ""}`}>
        {LINES.map((line) => (
          <li key={line.id}>
            <a href={`#${line.id}`} className={styles.link}>
              {line.title}
            </a>
          </li>
        ))}
        <li>
          <a href="#nosotros" className={styles.link}>
            Nosotros
          </a>
        </li>
        <li>
          <a href="#contacto" className={styles.link}>
            Contacto
          </a>
        </li>
      </ul>

      <div className={styles.search}>
        {isSearchOpen && (
          <input
            type="search"
            placeholder="Buscar productos"
            aria-label="Buscar productos"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            autoFocus
          />
        )}
        <button
          type="button"
          className={styles.searchButton}
          aria-label={isSearchOpen ? "Cerrar búsqueda" : "Buscar productos"}
          onClick={() => {
            if (isSearchOpen) onSearch("");
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          {isSearchOpen ? "✕" : "🔍"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
