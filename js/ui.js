export function renderRutas(container, rutas) {
  container.innerHTML = "";

  rutas.forEach(r => {
    container.innerHTML += `
  <div class="card">
    <strong>${r.transporte}</strong><br>
    ⏱️ ${r.tiempo_total} min<br>
    💰 RD$${r.costo_total}<br>
    🔄 ${r.transbordos} transbordos
  </div>
    `;
  });
}