const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2fbcc6b8d394fcd6d8361b21d3112e6d&query=' + longitude + ',' + latitude + '&units=f';

    request({url, json: true }, (error, { body }) => {
    
        if(error) {
            callback('unable to connect to weather service!', undefined);
        } else if (body.error){
            callback('Unable to connect to find location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out." + 
            "It feels like " + body.current.feelslike);
        } 
    });
};

module.exports = forecast;