let idioma = "es";

fetch("../data/lang.json")
  .then(r => r.json())
  .then(data => {
    window.textos = data;
    aplicarIdioma();
  });

window.cambiarIdioma = function(lang) {
  idioma = lang;
  aplicarIdioma();
}

function aplicarIdioma() {
  const btn = document.getElementById("buscar");

  if (btn) {
    btn.textContent = textos[idioma].buscar;
  }
}