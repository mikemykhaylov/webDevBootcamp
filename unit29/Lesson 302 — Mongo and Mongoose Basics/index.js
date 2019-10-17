const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongo_intro', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

const Cat = mongoose.model('Cat', catSchema);

Cat.create(
  {
    name: 'Snow White',
    age: 7,
    temperament: 'Playful',
  },
  (err, cat) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved to db');
      console.log(cat);
    }
  },
);

Cat.find({}, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
