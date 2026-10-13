export const CLIENT_CONFIG = {
  storeName: import.meta.env.VITE_STORE_NAME || "Tienda Demo",
  logoUrl: import.meta.env.VITE_LOGO_URL || "",
  googleSheetUrl: import.meta.env.VITE_GOOGLE_SHEET_URL,
  currencySymbol: "$",
  // Datos publicos del negocio: si la variable de entorno no esta definida, se usan estos.
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "5493794223735",
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    facebook: import.meta.env.VITE_FACEBOOK_URL,
    locationUrl: import.meta.env.VITE_MAP_URL,
  },
  contact: {
    address: import.meta.env.VITE_ADDRESS || "Tacuarí 1954, Corrientes",
    phone: import.meta.env.VITE_PHONE,
    email: import.meta.env.VITE_EMAIL,
  },
  theme: {
    fontFamily: "'Inter', sans-serif",
  },
};
