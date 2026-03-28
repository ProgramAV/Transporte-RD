console.log("APP CARGADA");
import { cargarDatos } from "./dataService.js";
import { filtrarRutas, calcularRuta, ordenarRutas } from "./utils.js";
import { renderRutas } from "./ui.js";
import { dibujarMapa } from "./mapa.js";
import "./i18n.js";

let rutas = [];
let alertas = [];

const form = document.getElementById("formBusqueda");
const resultados = document.getElementById("resultados");
const selectOrden = document.getElementById("ordenar");

const iconos = {
  concho: "🚗",
  guagua: "🚌",
  motoconcho: "🏍️"
};

cargarDatos().then(data => {
  rutas = data.rutas;
  alertas = data.alertas;

  llenarSelects(data.barrios);
  dibujarMapa();
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const criterio = selectOrden.value;

  let resultado = filtrarRutas(rutas, origen, destino)
    .map(r => calcularRuta(r, alertas));

  resultado = ordenarRutas(resultado, criterio);

  renderRutas(resultados, resultado);

    console.log("Origen:", origen);
    console.log("Destino:", destino);
    console.log("Rutas:", rutas);
});

// SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("js/sw.js");
}

function llenarSelects(barrios) {
  const origen = document.getElementById("origen");
  const destino = document.getElementById("destino");

  origen.innerHTML = "<option value=''>Selecciona origen</option>";
  destino.innerHTML = "<option value=''>Selecciona destino</option>";

  barrios.forEach(b => {
    origen.innerHTML += `<option value="${b.nombre}">${b.nombre}</option>`;
    destino.innerHTML += `<option value="${b.nombre}">${b.nombre}</option>`;
  });
}



console.log(rutas);
