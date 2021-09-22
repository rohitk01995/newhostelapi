const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  loanAmount: {
    type: Number,
    required: true,
  },
  comments: String,
  
},);

module.exports = mongoose.model('loan',loanSchema);