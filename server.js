//Entry file for upgraded simple weather app
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '3d313d4e9b6031474b70207db742a6f4';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: 'Error, please try again'});
});

app.listen(3000, function () {
    console.log('Example app listens on port 3000!')
});

app.post('/', function(req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    request(url, function(err, response, body) {
        if (err) {
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
                res.render('index', {weather: message, error: null});
            }
        }
    });
});

