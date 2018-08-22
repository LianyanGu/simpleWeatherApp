//This is for the simple weather app
let request = require('request');
const argv = require('yargs').argv;

let apiKey = '3d313d4e9b6031474b70207db742a6f4';
let city = argv.v || 'Alpharetta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(weather);
        console.log(message)
    }
});