const express = require('express');
const app = express();
const mongoose = require('mongoose');//mongoose will help us to connect to our database
const router = require('express').Router();
const clientPassport = require ("passport");



const port = 3000;

app.get("/",(req,res)=>{
  res.send("hello word");
});

const morgan = require("morgan")
app.use(morgan('dev'))


//middleware sending and receving in json
app.use(express.json());

//middleware
//Tell Express to make this public folder accessible to the public 
app.use(express.static('public'));

//we need to set view engine to ejs
//This tells Express we’re using EJS as the template engine.
app.set('view engine', 'ejs')

//We create a server that browsers
//can connect to. We do this by using the Express’s listen method.
app.listen( port	 , () => {
  console.log("App is running on port "+ port);
});

// Make sure you place body-parser before your CRUD handlers!
//the urlencoded method within body-parser tells body-parser to extract data 
//from the <form> element and add them to the body property in the request object.
app.use(express.urlencoded({ extended: true }))

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
//app.use(express.static(__dirname + '/public'));

//---------------------------------

  //connect to mongo
  mongoose.connect(
    "mongodb+srv://achref:123456789a@cluster0.08acjuy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(() => {
      console.log('Connected to Database');
    })
    .catch(err => {
      console.log('Error connecting to Database: ', err);
    });

  // Passport Client middleware
    app.use(clientPassport.initialize());
    
  // Passport Client config
  //require("./jwt_passport/clientPassport.js")(clientPassport);

  //require the files

   EventRouter = require('./routes/event');


  //use the files
  app.use('/Event', EventRouter); 



