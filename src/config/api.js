import axios from "axios";

export default axios.create({
    baseURL: "http://api.openweathermap.org/"
})

// kako da se uputi api poziv sa imenom grada i da on konvertuje u gegr.sirinu i duzinu
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}