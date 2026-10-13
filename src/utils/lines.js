/**
 * Las dos lineas de la carpinteria. El valor "Categoría" de la planilla decide a cual
 * pertenece cada producto: "Muebles" (madera) u "Hogar" (tapizados, almohadones, lonas...).
 */
export const LINES = [
  {
    id: "muebles",
    category: "Muebles",
    title: "Muebles",
    tagline: "Madera trabajada a medida",
    cta: "Ver muebles",
  },
  {
    id: "hogar",
    category: "Hogar",
    title: "Hogar",
    tagline: "Tapizados, almohadones y lonas",
    cta: "Ver hogar",
  },
];

const normalize = (text) => (text || "").trim().toLowerCase();

/** Linea de un producto. Una categoria desconocida cae en Muebles, la linea principal. */
export function lineOf(category) {
  return LINES.find((line) => normalize(line.category) === normalize(category)) ?? LINES[0];
}
