const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { show: true });
});

app.get('/love/:lover', (req, res) => {
  const { lover } = req.params;
  res.render('love', { lover });
});

app.get('/posts', (req, res) => {
  const posts = [
    { title: 'Post1', author: 'Suzy' },
    { title: 'Rusty is adorable', author: 'Colt' },
    { title: 'Post2', author: 'Jack' },
  ];
  res.render('posts', { posts });
});

app.listen(3000, () => {
  console.log(`Serving demo on ${3000}`);
});
