console.log('Hola mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    //monohilo significa que cuando tiene un error, se detiene
    /* if (i === 5) {
        console.log('forzamos error');
        var a = 3 + z;
    } */
}, 1000);

console.log ('Segunda instrucción')