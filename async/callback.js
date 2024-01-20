//las funciones son objetos de primer nivel
function soyAsincrona(miCallback) {
    setTimeout(function () {
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000)
}

console.log('Iniciando el proceso...');
//una funcion dentro de otra función
soyAsincrona(function() {
    console.log('Termiando el proceso');
});

//PROBLEMA A RESOLVER:
//¿Cómo hacemos para hacer un console.log cuando la función termine de ejecutarse?
//Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.