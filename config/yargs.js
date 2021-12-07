const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe:'Base de la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe:'Lista o no la tabla',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe:'Hasta donde quieres imprimir',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        return true;
    })
    .argv;

module.exports = argv;