export async function cargarDatos() {
  const [barrios, rutas, alertas] = await Promise.all([
    fetch("../data/barrios.json").then(r => r.json()),
    fetch("../data/rutas.json").then(r => r.json()),
    fetch("../data/alertas.json").then(r => r.json())
  ]);

  return {
    barrios: barrios.barrios,
    rutas: rutas.rutas,
    alertas: alertas.alertas
  };
}