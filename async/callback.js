//las funciones son objetos de primer nivel
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando el proceso...');
//una funcion dentro de otra función
hola('Brenda', function(nombre) {
    adios (nombre , function() {
        console.log('Termiando el proceso');
    });
});

//PROBLEMA A RESOLVER:
//¿Cómo hacemos para hacer un console.log cuando la función termine de ejecutarse?
//Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.