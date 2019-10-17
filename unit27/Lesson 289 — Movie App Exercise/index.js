const express = require('express');

const app = express();

const request = require('request-promise');
const bodyParser = require('body-parser');

let searchPhrase = '';

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/searching', (req, res) => {
  searchPhrase = req.body.search;
  searchPhrase = searchPhrase.replace(' ', '+');
  res.redirect('/results');
});

app.get('/results', (req, res) => {
  request(`http://www.omdbapi.com/?apikey=thewdb&s=${searchPhrase}`)
    .then(body => {
      const parsedBody = JSON.parse(body).Search;
      res.render('results', { parsedBody });
      searchPhrase = '';
    })
    .catch(err => {
      console.log(`Error: ${err.statusCode}`);
      searchPhrase = '';
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
