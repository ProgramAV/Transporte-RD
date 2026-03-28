export function guardarFavorita(ruta) {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  fav.push(ruta);
  localStorage.setItem("fav", JSON.stringify(fav));
}

export function obtenerFavoritas() {
  return JSON.parse(localStorage.getItem("fav")) || [];
}