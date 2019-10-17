const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data_embedding', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});

const userModel = mongoose.model('user', userSchema);

userModel.findOne({ name: 'Will Smith' }, (findErr, findResult) => {
  if (findErr) {
    console.log(findErr);
  } else {
    findResult.posts.push({
      title: 'Arabian Nights',
      content: `Oh I come from a land
                From a faraway place
                Where the caravan camels roam
                Where they cut off your ear
                If they don't like your face
                It's barbaric, but hey, its home
                When the winds from the east
                And the suns from the west
                And the sand in the glass is right
                Come on down
                Stop on by
                Hop a carpet and fly
                To another Arabian night`,
    });
    findResult.save((saveErr, saveResult) => {
      if (saveErr) {
        console.log(saveErr);
      } else {
        console.log(saveResult.posts);
      }
    });
  }
});
