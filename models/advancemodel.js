const mongoose = require("mongoose");

const advanceSchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  advanceAmount: {
    type: Number,
    required: true,
  },
  comments: String,
  
},);

module.exports = mongoose.model('advance',advanceSchema);