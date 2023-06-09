const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  likes: {//dont use
    type: Number,
    required: true,
    min: 0,
  },
  shares: {//dont use
    type: Number,
    required: true,
    min: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  dateCreated:{
    type: Date,
    required: true,
  },
  text:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Comment', CommentSchema);