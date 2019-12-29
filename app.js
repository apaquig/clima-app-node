const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.long);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);