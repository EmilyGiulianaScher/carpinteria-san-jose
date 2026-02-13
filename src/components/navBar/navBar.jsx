import React, { useState } from "react";
import styles from "./navbar.module.css";
import { CLIENT_CONFIG } from "../../config";

const Navbar = ({ categories, onCategorySelect, onSearch, searchTerm }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logoContainer}
        onClick={() => onCategorySelect("Todos")}
      >
        {CLIENT_CONFIG.logoUrl && (
          <img src={CLIENT_CONFIG.logoUrl} alt="Logo" className={styles.logo} />
        )}
        <span className={styles.brandName}>{CLIENT_CONFIG.storeName}</span>
      </div>

      <div
        className={`${styles.navLinks} ${isSearchOpen ? styles.hiddenOnMobile : ""}`}
      >
        <button
          className={styles.link}
          onClick={() => {
            onCategorySelect("Todos");
            onSearch("");
          }}
        >
          Inicio
        </button>

        <div className={`${styles.dropdown} ${styles.link}`}>
          <span>Productos ▾</span>
          <div className={styles.dropdownContent}>
            <button
              className={styles.dropdownItem}
              onClick={() => onCategorySelect("Todos")}
            >
              Ver Todos
            </button>
            {categories.map(
              (cat) =>
                cat !== "Todos" && (
                  <button
                    key={cat}
                    className={styles.dropdownItem}
                    onClick={() => onCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                ),
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.searchContainer} ${isSearchOpen ? styles.searchActive : ""}`}
      >
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />

        {!isSearchOpen && (
          <button
            className={styles.searchToggleBtn}
            onClick={() => setIsSearchOpen(true)}
          >
            🔍
          </button>
        )}

        {isSearchOpen && (
          <button
            className={styles.closeSearchBtn}
            onClick={() => {
              setIsSearchOpen(false);
              onSearch("");
            }}
          >
            ✕
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
