const express = require('express');
const {animals} = require('./data/animals');

//To instantiate the server
const app = express();

//Creating a route for the front end can request data from
app.get('./api/animals', (req, res) => {
    res.send('Hello'); //send() method from the res=response to send the string Hello back to our client
});

//to make the server listen to requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
});




