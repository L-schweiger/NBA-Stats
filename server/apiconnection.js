var unirest = require('unirest');

var apikey = 'ad4e9b54cfdc73473787113ab18601f16cd0e3610af8a856b74b394145d3803c';
function getLiveGames(){
    unirest.get("https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apikey)
.end(function (result) {
  console.log(result.body);
});
}

function getTeam(){

}

function fillLiveHtml(){
    var string = '<div class="col-md-4 mb-5">'+
    '                  <div class="card h-100">'+
    '                    <img class="card-img-top" src="/ass/versus.png" alt="">'+
    '                    <div class="card-body">'+
    '                      <h4 class="card-title">Team 1</h4>'+
    '                      <p class="card-text">Spielerauflistung</p>'+
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
    '                      <p class="card-text">Statistiken</p>'+
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
    '                      <h4 class="card-title">Team 2</h4>'+
    '                      <p class="card-text">Spielerauflistung</p>'+
    '                    </div>'+
    '                    <div class="card-footer">'+
    '                      <a href="#" class="btn btn-primary">Team anzeigen</a>'+
    '                    </div>'+
    '                  </div>'+
    '                </div>';
        document.getElementById('dynamiccontent').innerHTML = string;
}

module.exports = {
    getLiveGames,
    getTeam
}