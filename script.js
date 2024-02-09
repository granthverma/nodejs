const express = require('express')

// name kuch bhi ho sakta hai 
//express -- express

const app = express()

// express -- now become app 

// get show in tab 

// app.use( function (req , res , next){
//   console.log("middleware working");
//   next();
// });


// app.use( function (req , res , next){
//   console.log("middleware working2");
//   next();
// });



app.use( function (req , res , next){
  console.log("middleware working3");
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World ll')
})


app.get('/home', function (req, res) {
    res.send('Hello from home ')
  })


 