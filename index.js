// Obtener el elemento del texto de la frase
var fraseTexto = document.querySelector('.frase-texto');

// Obtener la frase completa
var fraseCompleta = '"Que triste ha de ser morirse y no volver nunca más.\n Pero es tan linda la vida."';

// Definir el número de caracteres a mostrar inicialmente
var caracteresMostrados = 0;

// Definir el intervalo en milisegundos para mostrar cada letra
var intervalo = 80;

// Función para mostrar la frase de forma automática y truncada
function mostrarFrase() {
  // Obtener los caracteres a mostrar
  var caracteresAMostrar = fraseCompleta.slice(0, caracteresMostrados);

  // Mostrar los caracteres en el elemento de la frase
    fraseTexto.innerHTML = caracteresAMostrar.replace(/\n/, '<br>');

  // Incrementar el número de caracteres a mostrar
  caracteresMostrados++;

  // Verificar si se ha mostrado toda la frase
  if (caracteresMostrados <= fraseCompleta.length) {
    setTimeout(mostrarFrase, intervalo);
  }
}

// Función para verificar si el elemento de la frase está en el viewport
function checkFraseInView() {
  var windowHeight = window.innerHeight;
  var frasePosition = fraseTexto.getBoundingClientRect().top;

  // Si el elemento de la frase está en el viewport, mostrar la frase
  if (frasePosition < windowHeight) {
    mostrarFrase();
    window.removeEventListener('scroll', checkFraseInView);
  }
}

// Evento para verificar si el elemento de la frase está en el viewport al cargar la página o hacer scroll
window.addEventListener('DOMContentLoaded', checkFraseInView);
window.addEventListener('scroll', checkFraseInView);