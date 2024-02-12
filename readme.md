CONTENT THAT WE COVER 
 NODE JS INSTALL ✅
import and export in js  ✅
run the code ✅
npm usage ✅
express ✅
middleware✅

day 2 

node vs express - node is the main thing  express ke code se hum server ka code likh pate and server kaise react karega wo bhi express ke help se likhte hai 

http - > hard and lengthy difficult to understand

what is express js -  package routing respone Middleware ,Template Engines ,Error Handling ,HTTP Utility Methods and Middleware , data handling 


Express.js is a web application framework for Node.js, a runtime environment for server-side JavaScript. Express.js simplifies the process of building robust and scalable web applications by providing a set of features and tools for handling routes, HTTP requests, middleware, and more

why express js -> http is difficult to use express make this easier




Express.js is a popular framework for building web applications with Node.js. People like it because it's easy to use, flexible, and doesn't force a lot of rules on how you should build your app. It's like a toolbox that lets you pick and choose what you need. Plus, lots of other developers use it, so there's a big community and plenty of help available. If you want to build a web app with Node.js, Express is a solid choice!




routing  -->  routes banaane ke process ko hum kahte hai routing  

 routing helps direct people to the right parts of your website based on the web 

/profiles  
/home
/contact 
/profile/himanshu/about-us/


middleware  ek aise function hota hai jo har route se pahle chalta hai iska matlab sarre routes mein koi bhi chale usee pahle middleware chalta hai and usmein likha code pahle execute hota hai


Middleware ek programming concept hai jo software applications mein use hota hai. Middleware, application ke various components ke beech communication aur data processing ko handle karta hai. Ye components, jese ki server-side logic, databases, aur clients, ke beech communication aur interaction ko facilitate karta hai.

Express.js mein, jo ek Node.js web application framework hai, middleware bahut important role play karta hai. Ye request-response cycle ke dauran tasks ko handle karta hai, jese ki authentication, logging, aur data processing.

Kuch key points middleware ke baare mein:

Request Processing: Middleware functions request-response cycle mein intervene karte hain. Ye request ko process karte hain, kuch changes karte hain, aur fir use agle middleware ya final response ke liye pass karte hain.

Modularity: Middleware modular hota hai, jiska matlab hai aap ek se zyada middleware functions ko chain mein attach kar sakte hain. Har middleware apne specific task ke liye responsible hota hai.

Example: Agar aap authentication middleware use karte hain, to ye request aane se pehle user ko authenticate karega. Agar user authenticated hai, to request ko aage bhejega, warna unauthorized access ka response bhejega.


is example mein, myMiddleware ek simple middleware hai jo har request aane se pehle console mein message print karega. Fir next() ke through control ko agle route handler mein pass karega.

```
const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('This is a middleware function');
  next(); // Call next to pass control to the next middleware or route handler
}

// Attach middleware to all routes
app.use(myMiddleware);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});



```
req - data lena gaya 
res - lekar aaya data 
next () - run th next program



request and response 

req mein saara data hota hai aane waale user ki request ki taraf ka , jaise ki uski location device info and other things 


res mein controls hota hai jinke basis pe hum server se response bhje paate hai 
request 


next thing which should be executed 

route parameters 
- to make any  route dynamic you can use :at the place you want to make it dynamic and to access there value use req.params


/author/books/issued/harsh
/author/books/issued/harshooo
/author/books/issued/harshpppppp


```

app.get('/profile/:username', function (req, res) {
    res.send(`hello from ${req.params.username}`)
  })

```

template engines  :> 

### ejs :


html - 2+ 3 = 2 +3 
ejs - 2+ 3 = 5
dynamic version html  


ejs setup karne ke liya 


1) ejs install 

npm i ejs 

2) configure ejs 

app.set("view engine ", "ejs");

3) ek views folder banao


4) us mein ejs files banao 

5 send ki jagah render karo -> render karte waqt make sure app view folder ke andar waali hi koi file kaa naam likhein , aur render fnf ejs mention na kare 




static files 
http  methods  - get post 



1. Handling GET Requests:
Use app.get to define routes that respond to GET requests. In the example, accessing the root URL (/) triggers a simple response.

2. Handling POST Requests:
Employ app.post to handle POST requests. Ensure you include middleware like express.json() to parse JSON data in the request body.

3. Accessing Data from POST Requests:
Inside the POST request handler, use req.body to access data sent in the request body.
error handling 


