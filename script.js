console.log('Application is starting...');

const express = require('express')

// name kuch bhi ho sakta hai 
//express -- express

const app = express()


app.set("view engine ", "ejs");


app.get( "/", function (req, res) {
  res.render("index")
})

app.listen(3000);

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




// app.use( function (req , res , next){
//   console.log("middleware working3");
//   next();
// });


// app.get('/', function (req, res) {
//   res.send('Hello World 1111111')
// })


// app.get('/profile', function (req, res) {
//     res.send('Hello from home ')
//   })


// app.get('/profile/:username', function (req, res) {
//     res.send(`hello from ${req.params.username}`)
//   })



  const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//  console.log('Reached this point successfully...');