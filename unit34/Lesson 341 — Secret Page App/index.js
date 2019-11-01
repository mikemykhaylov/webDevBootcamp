const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const passport = require('passport');

const LocalStrategy = require('passport-local');

const passportLocalMongoose = require('passport-local-mongoose');

const expressSession = require('express-session');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/secret_page', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: 'Lorem Ipsium Dolor',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());

app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

// ROUTS

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/secret', isLoggedIn, (req, res) => {
  res.render('secret');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (newErr, newUser) => {
    if (newErr) {
      console.log(newErr);
      res.redirect('/register');
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/secret');
      });
    }
  });
});

app.post(
  '/login',
  passport.authenticate('local', { successRedirect: '/secret', failureRedirect: '/login' }),
  (req, res) => {},
);

app.listen(80, () => {
  console.log('Listening on 80');
});
