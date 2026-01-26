import React from 'react';
import styles from './navbar.module.css';
import { CLIENT_CONFIG } from '../../config';

const Navbar = ({ categories, onCategorySelect, onSearch, searchTerm }) => {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => onCategorySelect("Todos")}>
        <img src={CLIENT_CONFIG.logoUrl} alt="Logo" className={styles.logo} />
        <span className={styles.brandName}>{CLIENT_CONFIG.storeName}</span>
      </div>

      <div className={styles.navLinks}>
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
            {categories.map(cat => (
              cat !== "Todos" && (
                <button
                  key={cat}
                  className={styles.dropdownItem}
                  onClick={() => onCategorySelect(cat)}
                >
                  {cat}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input 
          type="text" 
          placeholder="Buscar..." 
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

    </nav>
  );
};

export default Navbar;