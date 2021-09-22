const mongoose = require("mongoose");

const salarySchema = mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  salaryAmount: {
    type: Number,
    required: true,
  },
  actualSalary:{
      type:Number,
      required:true},
  comments: String,
  
},);

module.exports = mongoose.model('salary',salarySchema);