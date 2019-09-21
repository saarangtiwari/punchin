const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PunchInSchema = new Schema({
  punchInTime: [{
    type: String,
    required: true
  }],
  punchInBy: {
    type: String,
    required: true
  },
  punchInDate: {
    type: String,
    required: true
  }
});

module.exports = PunchIn = mongoose.model('punchin', PunchInSchema);
