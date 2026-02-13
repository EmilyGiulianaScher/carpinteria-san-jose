import React, { useState } from 'react';
import styles from './floatingWhatsApp.module.css';
import { CLIENT_CONFIG } from '../../config';

const FloatingWhatsApp = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  if (!CLIENT_CONFIG.whatsappNumber) return null;

  const whatsappUrl = `https://wa.me/${CLIENT_CONFIG.whatsappNumber}`;

  return (
    <div className={styles.container}>
      {showWelcome && (
        <div className={styles.messageBubble}>
          <div className={styles.messageHeader}>
            <span>👋 ¡Hola!</span>
            <button 
              onClick={() => setShowWelcome(false)} 
              className={styles.closeBtn}
              title="Minimizar chat"
            >
              ✕
            </button>
          </div>
          <p className={styles.messageText}>¿Necesitas ayuda con tu pedido?</p>
        </div>
      )}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.floatBtn} ${!showWelcome ? styles.minimized : ''}`}
        onClick={() => setShowWelcome(true)}
        title="Chatear por WhatsApp"
      >
        <img 
          src="/public/whatsapp (1).png" 
          alt="WhatsApp" 
          className={styles.icon} 
        />
        
        {showWelcome && <span className={styles.btnText}>Chatear</span>}
      </a>
    </div>
  );
};

export default FloatingWhatsApp;