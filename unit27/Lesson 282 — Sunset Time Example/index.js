const request = require('request');

request(
  'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0',
  (error, response, body) => {
    const parsedBody = JSON.parse(body);
    if (error || parsedBody.status !== 'OK') {
      console.log(error);
      console.log(response);
    } else {
      console.log(parsedBody.results.sunset);
    }
  },
);
