const mongoose = require("mongoose");

const penaltySchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  penaltyAmount: {
    type: Number,
    required: true,
  },
  comments: String,
  
},);

module.exports = mongoose.model('penalty',penaltySchema);