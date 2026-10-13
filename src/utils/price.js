/**
 * La planilla la completan los dueños a mano, asi que el precio puede venir como "18000",
 * "$18.500" o "18.000" (punto de miles, estilo argentino). Number() de eso daba NaN y el
 * sitio mostraba "$NaN". Aca se limpia el texto y, si no hay un numero valido, devuelve 0.
 */
export function parsePrice(raw) {
  if (raw === null || raw === undefined) return 0;
  const cleaned = String(raw)
    .replace(/[^\d.,]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : 0;
}

/** Texto para mostrar: "$18.500", o "Consultar precio" si la planilla no tiene un precio valido. */
export function formatPrice(price) {
  return price > 0 ? `$${price.toLocaleString("es-AR")}` : "Consultar precio";
}
