var express = require('express');
var ws = require('ws');
var app = express();
var port = 3000;

app.listen(port, function(){
  console.log('Server started on port ' + port);
})

app.use(express.static('./public'));

var wss = new ws.Server({port:3200});

wss.on('connection', function(socket){
  console.log('A new client has arrived');
  // socket.send('Welcome!');
  socket.on('message', function(msg){
    wss.clients.forEach(function(client){
      client.send(msg)
    })
  })
})






