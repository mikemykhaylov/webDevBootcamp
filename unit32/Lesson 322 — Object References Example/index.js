const mongoose = require('mongoose');
const postModel = require('./models/post');
const userModel = require('./models/user');

mongoose.connect('mongodb://localhost/object_references', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

userModel
  .findOne({ name: 'Bob Ross' })
  .populate('posts')
  .exec((err, users) => {
    if (err) {
      console.log(err);
    } else {
      console.log(users);
    }
  });
