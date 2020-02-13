let path = require('path');
const readMD = require('./index')

let file = process.argv[2]; // matriz que contiene los argumentos de la línea de comandos
file = path.resolve(file); 
file = path.normalize(file); // si hay errores de escritura, los resuelve para leerlos bien 

readMD(file);