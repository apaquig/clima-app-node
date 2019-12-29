const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdce4393a02d4027dc06a65a2dfbe358&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}