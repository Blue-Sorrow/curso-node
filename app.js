const { option } = require('yargs');
const { crearArchivo } = require('./helpers/mult');
const argv = require('./config/yargs')

require('colors');

console.clear();

// console.log(argv);

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
