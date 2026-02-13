export const CLIENT_CONFIG = {
  storeName: import.meta.env.VITE_STORE_NAME || "Tienda Demo",
  logoUrl: import.meta.env.VITE_LOGO_URL || "",
  googleSheetUrl: import.meta.env.VITE_GOOGLE_SHEET_URL,
  currencySymbol: "$",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER,
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    facebook: import.meta.env.VITE_FACEBOOK_URL,
    locationUrl: import.meta.env.VITE_MAP_URL,
  },
  contact: {
    address: import.meta.env.VITE_ADDRESS,
    phone: import.meta.env.VITE_PHONE,
    email: import.meta.env.VITE_EMAIL,
  },
  theme: {
    fontFamily: "'Inter', sans-serif",
  },
};
