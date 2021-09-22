const express = require ('express');

const router = new express.Router();

const foodbillEmployee =  require('../models/foodbill');



router.post("/foodbill", async (req, res) => {
    try {
      const emp = new foodbillEmployee(req.body);
      console.log(req.body);
      const createEmployee = await emp.save();
      res.status(201).send(createEmployee);
    } catch (e) {
      res.status(400).send(e);
    }
  });

 
  
  //read the data of registered Emp
  router.get("/foodbill", async (req, res) => {
    try {
      const employeeData = await foodbillEmployee.find();
      res.send(employeeData);
      
    } catch (e) {
      res.send(e);
    }
  });
  
  //get the indivisual Emp data using id
  
  router.get("/foodbill/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const employeeData = await foodbillEmployee.findById(_id);
      console.log(employeeData);
      if (!employeeData) {
        return res.status(404).send();
      } else {
        res.send(employeeData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  //delete the Emp by it id
  router.delete("/foodbill/:id", async (req, res) => {
    try {
     
     const deleteotEmployee= await foodbillEmployee.findByIdAndDelete(req.params.id);
     if(!req.params.id){
         return res.status(400).send()
     }
     res.send(deleteotEmployee);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  //update the Emp by its id
  router.patch("/foodbill/:id", async (req, res) => {
      try {
       const _id=req.params.id;
       const updateotEmployee= await foodbillEmployee.findByIdAndUpdate(_id,req.body,{
           new:true
       });
      //  if(!req.params.id){
      //      return res.status(400).send()
      //  }
       res.send(updateEmployee);
      } catch (e) {
          res.status(404).send(e);
      }
    });

    module.exports = router;