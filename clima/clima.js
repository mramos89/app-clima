const axios = require('axios');
const apiKey = '3aa2301b23ee0565143dc5f3fffa442e';


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}