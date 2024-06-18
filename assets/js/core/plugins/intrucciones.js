function audio() {
    var intro = introJs();
    intro.setOptions({
            steps: [
                { element: document.getElementById(''), 
                intro: 'hola soy roberto cassiani <audio autoplay class="w-100 mt-3" controls><source src="assets/audio/audio1.mp3" type="audio/mpeg"></audio>presiona siguiente para ver más detalles',
                step: 0,
                position: 'right',
                x: 100, // Coordenada X
                y: 0, // Coordenada Y
                 },
                { element: document.getElementById('intro1'),
                 intro: 'estos son mis servicios <br> presiona siguiente para ver más detalles', step: 1 },
                { element: document.getElementById('intro2'),
                 intro: 'presiona este icono para abrir una ventana emergente donde completaras los campos con su información correspondiente, luego haz clic en el botón para calcular la información y haz clic en la "X" para volver <audio autoplay class="w-100 mt-3" controls><source src="assets/audio/audio2.mp3" type="audio/mpeg"></audio>presiona para terminar', step: 2 },
                 ]
           });
           intro.start();
       }
// Estilo personalizado para el tooltip */ es un CSS personalizado para que pueda modificarce el toltip
//.introjs-custom-tooltip {
//    max-width: 400px; /* Ancho máximo del tooltip */
//    font-size: 16px; /* Tamaño de fuente personalizado */
//    /* Otros estilos personalizados, como el fondo, el color de texto, el margen, etc. */
//}