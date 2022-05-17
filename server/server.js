
// after notes on notebook we then need to import express down below
const express = require('express');

//create our express app
const app= express();

//share my client side files 
// with the public (as in, anyone that wants them)
// express is an argument  to the function (app)
app.use(express.static('server/public'));


// listen for interent requests for every express set up
app.listen(5000, () => {
 console.log(`I'm listening`);


});


console.log('look mom, im a server');



