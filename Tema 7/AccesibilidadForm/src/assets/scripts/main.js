function onIniciar() {
  console.log("Hola Mundo");
 
  // Conseguir los elementos HTML implicados
  const btnTab = document.querySelectorAll(".botonesTab__pestana");
  const blockText = document.querySelectorAll(".contenedorTexto__bloque");
 
  // Añadir EventListener a todos los botones
  btnTab.forEach((boton, i) => {
     boton.addEventListener("click", () => {
       // Quitamos a todos los botones la clase active
       btnTab.forEach((botonFE, j) => {
         botonFE.classList.remove("active");
         blockText[j].classList.remove("active");
       });
 
       boton.classList.add("active");
       blockText[i].classList.add("active");
     });
  });
 
  // Código del acordeon
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  const pContenido = document.querySelectorAll(".divContenedor__contenido");
 
  h2Titulo.forEach((nodo, i) => {
     nodo.addEventListener('click', () => {
       if (pContenido[i].classList.contains('divContenedor__contenido--activo')) {
         pContenido[i].classList.remove('divContenedor__contenido--activo');
       } else {
         pContenido[i].classList.add('divContenedor__contenido--activo');
       }
     });
  });
 }
 
 window.onload = onIniciar; 
 