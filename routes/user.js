const { response } = require('express');
const express = require('express')

const router = express.Router();

const users = require('../models/users.model')

//Adding Users
router.post('/register', (req, res) => {
    const newUser = new users(req.body);
    
    newUser.save().then(data => {
       res.status(200).json(data);
   }).catch(err => {
       res.status(500).json({
         message: "Fail",
         error: err.message
       });
   });
})

//Getting All user
router.get('/list', (req,res) => {
  users.find((err, response) => {
    if(err){
      res.send(err);
    } else{
      res.send(response);
    }
  })
})

//getting User by Name
router.get('/SearchByName', (req,res) => {
  users.find({name: req.body.firstName}, (err, response) => {
    if(err){
      res.send(err);
    } else{
      res.send(response);
    }
  })
})

//Search By id
router.get('/SearchById', (req,res) => {
  users.find({_id: req.query.id}, (err, response) => {
    if(err){
      res.send(err);
    } else{
      res.send(response);
    }
  })
})

module.exports = router;