// requires
const axios = require("axios");

const getLocationLatLng = async dir => {
    const encodeURL = encodeURI(dir);

    // axios
    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            "X-RapidAPI-Key":
                "7025a4dcd2msh1fdf7f2ba8023b4p1110fdjsnd94986f45518"
        }
    });

    const resp = await instancia.get();

    if (resp.data.Results[0].length === 0) {
        throw new Error(`No existen resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLocationLatLng
};
