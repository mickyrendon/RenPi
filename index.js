import { menuEvent } from './src/menu.js'
import { serviceImpar } from './src/services.js'

globalThis.addEventListener('load', async () => {
    const { deleteLoader } = await import('./src/preloader.js')
    return deleteLoader()
})


const body = document.querySelector('body')

body.addEventListener('click', menuEvent, false)
serviceImpar()


// / JavaScript
// window.addEventListener('load', function() {
//   const preloader = document.getElementById('preloader');
//   preloader.style.display = 'none';
  
//   // Mostrar elementos ocultos
//   const elementos = document.querySelectorAll('.hide');
//   elementos.forEach(function(elemento) {
//     elemento.style.display = 'block';
//   });
// });