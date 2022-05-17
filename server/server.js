
// after notes on notebook we then need to import express down below
const express = require('express');

//create our express app
const app= express();

//  arrays with data:

let games = [
{
name: 'Minecraft', 
funLevel: 7

}, 
{
    name: 'CoD', 
    funLevel: 9
}, 
{
    name: 'Super Mario bros', 
    funLevel: 9.3
},


];


//share my client side files 
// with the public (as in, anyone that wants them)
// express is an argument  to the function (app)
app.use(express.static('server/public'));

// for an array to grab things whill have 2 arguments: 

//              request and respond 
app.get(`/games`, (req, res) => {
    // send the games back to the client 

console.log('in the /games handler');

    res.send(games);
    // function code is run when someone asks to get our games
    // ie. goes to http://localhost:5000/games
});

app.get(`/a-nice-number`, (req, res) => {
    console.log(`in  /a-nice-number`); 
let niceNumber= Math.random() * 1000;

     res.send(`your nice number is ${niceNumber}`); 
     console.log('nice number is', niceNumber);

});

// listen for interent requests for every express set up
app.listen(5000, () => {
 console.log(`I'm listening`);


});


console.log('look mom, im a server');



