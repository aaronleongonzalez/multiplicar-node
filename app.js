const {crearArchivo} = require("./multiplicar/multiplicar");


crearArchivo(2)
    .then( () => console.log( `Archivo correctamente la tabla del: ${2}`))
