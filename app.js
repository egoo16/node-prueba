const os = require('os');
const fs = require('fs');

const mi = require('./mito.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

mi.saludar();
console.log(mi.subs);
/*let cpu_string = JSON.stringify(cpu)
fs.appendFile('Prueba.txt', `Informacion del CPU: ${cpu_string} ` , function(error){
    if(error){
    console.log('error al crear el archivo');
}
});*/