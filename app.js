var express = require('express');
var app = express();

//
// var logger = require('./logger');
// app.use(logger);

app.use(express.static('public'));
var blocks = require('./routes/blocks');
// var buildings = require('./routes/buildings');
// var users = require('./routes/users');

app.use('/blocks', blocks);
// app.use('/buildings', buildings);
// app.use('/users', users);


var locations = {
  'Fixed' : 'First floor', 'Movable' : 'Second floor', 'Rotating' : 'Penthouse'
};

  app.get('/locations/:name', function(request, response){

    var location = locations[request.blockName];
    response.json(location)
  });


app.listen(3000);


//lessson 2
// app.get('/blocks', function(request, response){
//   var blocks = ['Fixed', 'Movable', 'Rotating'];
//   if (request.query.limit >= 0) {
//     response.json(blocks.slice(0, request.query.limit));
//   } else {
//     response.json(blocks);
//   }
// });
// app.use(express.static('public'));
// ^^^^ is same as vvvv
// app.get('/', function(request, response){
//   response.sendFile(__dirname + '/public/index.html');
//
// });

//lesson 1 vvv
// app.get('/', function(request, response) {
//   response.write('Hello world');
//   response.end();
//   //same as response.send('Hello world');
// });
// app.listen(3000, function(){
//     console.log("Listening on port 3000...");
// });
// app.get('/blocks', function(request, response) {
//   response.redirect(301, '/parts');
// });
