//--App is a function handler that we can supply to the HTTP server
//var __dirname ='/Users/Arijit/Documents/chat-example';
var app = require('express')();
var http = require('http').Server(app);
//-- '/' is a route handler that gets called when we hit our website home
app.get('/', function(req, res){
  res.send('<h1>Merry Christmas</h1>');
});
//--we make the server listen to port number 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});