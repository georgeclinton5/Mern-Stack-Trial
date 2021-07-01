const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importing MongoDB connections
const mongoose = require('mongoose')
const connectDB = require('./mongoConfig/db')


//Importing Routes
const user = require('./routes/user');



const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(__dirname + "/public"));

//Routes
app.use('/user', user);




app.post('/signin', (req, res) => {
    const {name, username, email, password} = req.body;
    console.log(req.body.email, DataBase.users[0].email);
    if( email === DataBase.users[0].email && password === DataBase.users[0].password) {
       
        res.json("login Success");
        
      }
      else { res.status(400).json("Error Loging in") }
});




app.get('/profile/:id', ( req, res) => {
    const { id } = req.params;
    let found = false;
     DataBase.users.map( user => {
         if(user.id === id){
             found = true;
             return res.json(user);
            }
    if(!found){
        res.send('error')
    }
  })
});



app.listen(3000, ()=>{ console.log("!!!!! Server is Online !!!!!")});