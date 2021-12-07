const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
        consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
    }

    try {

        if (listar) {
            console.log('==============='.green);
            console.log('Tabla del'.blue, colors.blue(base));
            console.log('==============='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}