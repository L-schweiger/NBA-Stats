var express = require('express');
var server = express();
var path = require('path');

server.get('/', function(request, reponse) {
    reponse.sendFile('index.html', {root: path.join(__dirname, './html')});
});

server.listen(3000, function() {
    console.log('Server listening to :3000')
})