const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
