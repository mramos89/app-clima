const axios = require('axios');




const getLugarLatLon = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const resp = await axios({
        "method": "GET",
        "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "59c3463803msh53d6921fed4cf8bp146e4ajsn18ffca8247e4",
            "useQueryString": true
        },
        "params": {
            "location": `${encodeUrl}`
        }
    });;

    /*if (resp.data.Results === null) {
        throw new Error(`No hay resultado para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const direccionF = data.name;
    const lat = data.lat;
    const lon = data.lon;*/

    return {
        direccionF: 'Nueva York',
        lat: 40.75,
        lon: -74.00
    }
}


module.exports = {
    getLugarLatLon
}