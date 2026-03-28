export function filtrarRutas(rutas, origen, destino) {
  return rutas.filter(r => r.origen === origen && r.destino === destino);
}

export function calcularRuta(ruta, alertas) {
  let tiempo = ruta.tramos.reduce((a, t) => a + t.tiempo_min, 0);
  let costo = ruta.tramos.reduce((a, t) => a + t.costo, 0);

  alertas.forEach(a => {
    if (a.activa) {
      tiempo *= (1 + a.tiempo_pct / 100);
      costo += a.costo_extra;
    }
  });

  return { ...ruta, tiempo_total: Math.round(tiempo), costo_total: costo };
}

export function ordenarRutas(lista, criterio) {
  return [...lista].sort((a, b) => a[criterio + "_total"] - b[criterio + "_total"]);
}