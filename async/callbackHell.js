function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla bla bla bla');
        callbackHablar();
    });
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

//En esta parte del código uso funciones recursivas porque estoy llamando 
//a conversacion dentro de si misma. y mediante un If como estructura de 
//control le digo que cantidad de veces va a  ejectuarse la funcion hablar.

//función recursiva
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando el proceso...');

hola('Brenda', function (nombre) {
    conversacion(nombre, 10, function() {
        console.log('Proceso terminado.');
    });
});

//callback hell

/* hola('Brenda', function(nombre) {
    hablar(function() {
        hablar(function() {
            hablar (function() {
                hablar(function(){
                    adios (nombre , function() {
                        console.log('Termiando el proceso');
                    });
                });
            });
        });
    })
}); */