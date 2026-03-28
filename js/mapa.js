export function dibujarMapa() {
  const svg = document.getElementById("mapa");

  if (!svg) {
    console.log("No se encontró el SVG");
    return;
  }

  svg.innerHTML = `
    <circle cx="50" cy="100" r="6" fill="red"/>
    <circle cx="150" cy="50" r="6" fill="red"/>
    <line x1="50" y1="100" x2="150" y2="50" stroke="blue" stroke-width="2"/>
  `;
}
console.log("MAPA EJECUTADO");