var express = require('express');
var server = express();
var path = require('path');
var apiconnection = require('./apiconnection');

server.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
server.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
server.use('/ass', express.static(__dirname + '/assets'));

server.get('/',apiconnection.getLiveGames,buildHtml);
// server.get('/', function(request, response) {
//     reponse.sendFile('index.html', {root: path.join(__dirname, './html')});
// });

function buildHtml(request, response, next) {
    var htmlBeforeRow = '<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8">'+
    '        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
    '        <title>NBA Stats</title>'+
    '        <link rel="stylesheet" href="/css/master.css" media="screen" charset="utf=8">'+
    '        <link href="/css/bootstrap.min.css" rel="stylesheet">'+
    '    </head>'+
    '    <body style="padding-top: 56px;">'+
    '            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">'+
    '              <div class="container">'+
    '                <a class="navbar-brand" href="#">NBA Stats</a>'+
    '                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
    '                  <span class="navbar-toggler-icon"></span>'+
    '                </button>'+
    '                <div class="collapse navbar-collapse" id="navbarResponsive">'+
    '                  <ul class="navbar-nav ml-auto">'+
    '                    <li class="nav-item active">'+
    '                      <a class="nav-link" href="#">Startseite'+
    '                        <span class="sr-only">(current)</span>'+
    '                      </a>'+
    '                    </li>'+
    '                    <li class="nav-item">'+
    '                      <a class="nav-link" href="anleitung">Anleitung</a>'+
    '                    </li>'+
    '                  </ul>'+
    '                </div>'+
    '              </div>'+
    '            </nav>'+
    '          '+
    '            <div class="container">'+
    '          '+
    '                <div class="col-md-13 mb-5" style="text-align: center;">'+
    '                  <hr>'+
    '                  <h2>ALLE LIVE SPIELE</h2>'+
    '                  <hr>'+
    '                </div>'+
    '              ';
var htmlAfterRow = '            </div>'+
    '  '+
    '        <script src="/js/jquery.js"></script>'+
    '        <script src="/js/bootstrap.min.js"></script>'+
    '    </body>'+
    '</html>';

    var html = htmlBeforeRow;
    for (var i = 0; i <= request.liveamount; i++) {
        html = html+
        '              <div class="row" style="text-align: center;" id="dynamiccontent">'+
        '	<div class="col-md-4 mb-5">'+
        '                  <div class="card h-100">'+
        '                    <img class="card-img-top" src="/ass/versus.png" alt="">'+
        '                    <div class="card-body">'+
        '                      <h4 class="card-title">' +request.livedata[0]+ '</h4>'+
        '                      <p class="card-text"><b>'+request.livedata[2].split('-')[0]+' Punkte erzielt</b></p>'+
        '                    </div>'+
        '                    <div class="card-footer">'+
        '                      <a href="#" class="btn btn-primary">Team anzeigen</a>'+
        '                    </div>'+
        '                  </div>'+
        '                </div>'+
        '                <div class="col-md-4 mb-5">'+
        '                  <div class="card h-100">'+
        '                    <img class="card-img-top" src="/ass/versus.png" alt="">'+
        '                    <div class="card-body">'+
        '                      <p class="card-text">Datum: '+request.livedata[3]+'<br>Startzeit: '+request.livedata[4]+'<br>Liga: '+request.livedata[5]+'<br>Land: '+request.livedata[6]+'</p>'+
        '                    </div>'+
        '                    <div class="card-footer">'+
        '                      <a href="#" class="btn btn-primary">Mehr Statistiken</a>'+
        '                    </div>'+
        '                  </div>'+
        '                </div>'+
        '                <div class="col-md-4 mb-5">'+
        '                  <div class="card h-100">'+
        '                    <img class="card-img-top" src="/ass/versus.png" alt="">'+
        '                    <div class="card-body">'+
        '                      <h4 class="card-title">' +request.livedata[1]+ '</h4>'+
        '                      <p class="card-text"><b>'+request.livedata[2].split('-')[1]+' Punkte erzielt</b></p>'+
        '                    </div>'+
        '                    <div class="card-footer">'+
        '                      <a href="#" class="btn btn-primary">Team anzeigen</a>'+
        '                    </div>'+
        '                  </div>'+
        '                </div>'+
        '              </div>'+
        '             <hr>';

        for(var j = 0; j <= 6; j++) {
            request.livedata.shift();
            }
      }

    html = html+htmlAfterRow;
    response.send(html);
}

server.listen(3000, function() {
    console.log('Server listening to :3000');
})