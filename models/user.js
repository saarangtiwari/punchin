const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('users', UserSchema);
