const express = require('express');
const {animals} = require('./data/animals');
const PORT = process.env.PORT || 3001;

//To instantiate the server
const app = express();

//function to filter the query
function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if(query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if(query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if(query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

//Creating a route for the front end can request data from
app.get('/api/animals', (req, res) => {
    let results = animals;
    if(req.query){
        results = filterByQuery(req.query, results); //passing the filterByQuery function with the query parameter = req.query and animalsArray = animals.json(results)
    }
    //res.send('Hello') //send() method from the res=response to send the string Hello back to our client
    res.json(results); 
});

//to make the server listen to requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});




