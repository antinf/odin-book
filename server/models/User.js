const mongoose = require('mongoose'); //Require mongoose

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String, //User's inputted first name
    required:true
  },
  lastName: {
    type: String, //User's inputted last name
    required: true
  },
  age: {
    type: Number, //User's inputted age
    min: 13, //We only allow signups of users 13 and older
    max: 130, //Set an upper age limit of 130
    required: true
  },
  email: {
    type: String, //User's inputted email
    required: true
  },
  password: {
    type: String, //Password which is hashed by bcrypt
    required: true
  },
  friendRequests:[{
    type: mongoose.Schema.Types.ObjectId, // recieved friend requests
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId, //friends are stored as references to another document ID of the friend's user document
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId, //posts are stored as references to another documnet ID of the post data
  }],
  likes:[{
    type: mongoose.Schema.Types.ObjectId, //likes are stored as references to another document ID of the like data

  }],
  shares:[{
    type: mongoose.Schema.Types.ObjectId, //shares are stored as references to another document ID of the share data
  }],
  comments:[{
    type: mongoose.Schema.Types.ObjectId, //comments are stored as references to another document ID which contains the comment data
  }],
  dateCreated:{
    type: Date, //Date is set when the user is first created in the user controller
    required: true
  }
});

module.exports = mongoose.model('User',UserSchema); //export the user model