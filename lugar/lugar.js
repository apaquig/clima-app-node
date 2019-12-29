const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        //    timeout: 10000,
        headers: { 'x-rapidapi-key': 'e4c95fc73bmshafe018bc42ce9c9p1d535djsna25e3d1e6591' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}