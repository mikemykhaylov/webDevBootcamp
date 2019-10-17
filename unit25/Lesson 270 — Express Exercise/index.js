const express = require('express');

const app = express();

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/', (req, res) => {
  res.send('Hi There! Welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
  const sounds = {
    dog: 'Woof',
    pig: 'Oink',
    cat: 'Meow',
    goldfish: '...',
  };
  const { animal } = req.params;
  const sound = sounds[animal];
  if (sound !== undefined) {
    res.send(`The ${capitalize(animal)} says: ${sound}`);
  } else {
    res.send('That animal doesn`t exist yet');
  }
});

app.get('/repeat/:word/:count', (req, res) => {
  const count = parseInt(req.params.count, 10);
  const word = `${req.params.word} `;
  let response = '';
  if (Number.isNaN(count) === false) {
    for (let i = 0; i < count; i += 1) {
      response += word;
    }
  } else {
    res.send('Wordcount is not a number!');
  }
  res.send(response);
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, () => {
  console.log(`Serving demo on ${3000}`);
});
