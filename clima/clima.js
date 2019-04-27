// requires
const axios = require("axios");

const appid = "c6b4d68e1ea9c4b901f4ad31736298cb";
const units = "metric";

const getClima = async (lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=${units}`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima
};
