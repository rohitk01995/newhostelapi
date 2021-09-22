const mongoose = require("mongoose");

const otSchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  otAmount: {
    type: Number,
    required: true,
  },
    comments: String,
});


module.exports = mongoose.model('ot',otSchema);