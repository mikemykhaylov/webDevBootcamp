const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
