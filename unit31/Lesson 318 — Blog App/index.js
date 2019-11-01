const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const expressSanitizer = require('express-sanitizer');

// APP CONFIG

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(expressSanitizer());

// MONGOOSE MODELS

const blogScheme = new mongoose.Schema({
  title: String,
  img: String,
  body: String,
  dateCreated: { type: Date, default: Date.now },
});

const blogModel = mongoose.model('Blog', blogScheme);

// MONGOOSE CONNECT

mongoose.connect('mongodb://localhost/restful_blog', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// ROUTING

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  blogModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { result });
    }
  });
});

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  blogModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.render('show', { result });
    }
  });
});

app.get('/blogs/:id/edit', (req, res) => {
  const { id } = req.params;
  blogModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.render('edit', { result });
    }
  });
});

app.delete('/blogs/:id', (req, res) => {
  blogModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.post('/blogs', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  blogModel.create(req.body.blog, (err, newBlog) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.put('/blog/:id', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  blogModel.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

app.listen(80, () => {
  console.log('Listening on port 80');
});
