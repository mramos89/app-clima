const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección  de la ciudad para obtener el clima'
    }
}).help().argv;

/*lugar.getLugarLatLon(argv.direccion)
    .then(console.log);*/

/*clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);*/

/* Tarea*/

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLon(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lon);
        return `El pais ${coords.direccionF} tiene un clima de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima para El pais ${direccion} `;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);