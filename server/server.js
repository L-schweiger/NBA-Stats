var express = require('express');
var server = express();
var path = require('path');
//var bootstrap = require('bootstrap'); umgangen mit direkter css und js-einbindung per pfad

server.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
server.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
server.use('/ass', express.static(__dirname + '/assets'));

server.get('/', function(request, reponse) {
    reponse.sendFile('index.html', {root: path.join(__dirname, './html')});
});

server.listen(3000, function() {
    console.log('Server listening to :3000')
})