const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3627e7d64b20bdec35bf66cd5c757d38&query=' + lat + ',' + long + '&units=f';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.current;
            callback(undefined, {
                weather_description: data.weather_descriptions[0],
                temperature: data.temperature,
                feel_like_temp: data.feelslike
            })
        }
    })
}

module.exports = forecast;