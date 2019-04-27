// requires
const location = require("./location/location");
const clima = require("./clima/clima");
const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad que queremos obtener el clima",
        demand: true
    }
}).argv;

const getInfoClimatica = async direccion => {
    try {
        const coords = await location.getLocationLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura en ${direccion} es de ${temp}°`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfoClimatica(argv.direccion)
    .then(console.log)
    .catch(console.log);
