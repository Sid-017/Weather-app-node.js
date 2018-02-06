const request = require('request');

var getWeather = (lat, lng, callback) => {

request({
  url: `https://api.darksky.net/forecast/b5de1dc6abf8b07ce6eee9ec7a143f79/${lat},${lng}`,
  json: true
}, (error, respone, body) => {
  if (!error && respone.statusCode === 200)
{
callback(undefined, {
  temperature: body.currently.temperature,
  apparentTemperature: body.currently.apparentTemperature
});
} else {
  callback('Unable to fetch weather');
}
});
};

module.exports.getWeather = getWeather;
