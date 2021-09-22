const express = require('express')
const app = express();
const mongoose = require('mongoose');
const penalty = require('./Routes/penaltyroutes');
const ot = require('./Routes/otroutes');
const advance = require('./Routes/advanceroutes');
const food = require('./Routes/foodroutes');
const loan = require('./Routes/loanroutes');
const salary = require('./Routes/salaryroutes');


require('dotenv/config');


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connected to db')
);

app.use(express.json())
app.use(penalty)
app.use(ot)
app.use(advance)
app.use(food)
app.use(loan)
app.use(salary)


app.listen(4000, ()=>{
    console.log('listening on port 4000');
})