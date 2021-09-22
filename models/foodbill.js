const mongoose = require("mongoose");

const foodbillSchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  foodAmount: {
    type: Number,
    required: true,
  },
  comments: String,
  
},);

module.exports = mongoose.model('foodbill',foodbillSchema);