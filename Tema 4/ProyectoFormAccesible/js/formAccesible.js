window.onload = function () {
  // Obtener el botón y el cuerpo del sitio web
  const botonCambiar = document.getElementById("opcionDislexia");
  const cuerpoSitio = document.body;
  // Estado para rastrear si la tipografía ha sido cambiada
  let tipografiaCambiada = false;

  // Agregar un evento de clic al botón
  botonCambiar.addEventListener("click", function () {
    // Verificar si la tipografía actual es la original
    if (!tipografiaCambiada) {
      // Cambiar la tipografía a OpenDyslexic y establecer tamaño de fuente
      cambiarTipografia("OpenDyslexic", "22px");
      tipografiaCambiada = true;
    } else {
      // Redirigir a index.html
      window.location.href = "index.html";
    }
  });

  // Función para cambiar la tipografía y el tamaño de fuente de todos los elementos del body
  function cambiarTipografia(nuevaTipografia, nuevoTamanoFuente) {
    // Obtener todos los elementos del body
    const elementos = cuerpoSitio.getElementsByTagName("*");
    // Iterar sobre los elementos y cambiar la tipografía y el tamaño de fuente
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.fontFamily = nuevaTipografia;
      elementos[i].style.fontSize = nuevoTamanoFuente;
    }
  }
};
