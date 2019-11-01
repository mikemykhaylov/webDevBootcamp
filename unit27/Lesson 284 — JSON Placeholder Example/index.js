const request = require('request-promise');

request('https://jsonplaceholder.typicode.com/comments/1')
  .then((htmlstring) => {
    const parsedBody = JSON.parse(htmlstring);
    console.log(`${parsedBody.name} says ${parsedBody.body}`);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
