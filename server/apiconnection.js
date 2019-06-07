//var unirest = require('unirest');
const request = require('request');

var apikey = 'ad4e9b54cfdc73473787113ab18601f16cd0e3610af8a856b74b394145d3803c';
function getLiveGames(mwRequest,mwResult,mwNext){
    var urlLive = "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apikey;
    var data = [];

    request({url: urlLive, json: true}, (error, response) => {
        if(response.body.success == 1){
            mwRequest.liveamount = response.body.result.length-1; // Anzahl der Live-Spiele
            response.body.result.forEach(function(res) {
                data.push(res.event_home_team); // teamname 1
                data.push(res.event_away_team); // teamname 2
                data.push(res.event_final_result); // standings (form: XXhometeam - XXenemyteam)
                data.push(res.event_date); // startdatum
                data.push(res.event_time); // startzeit
                data.push(res.league_name); // liganame
                if(res.country_name != 'World'){data.push(res.country_name)} // Land
                else{data.push('International')}
              });
              mwRequest.livedata = data;
              mwNext();
        }
    })
}

function getTeam(){

}

function fillLiveHtml(){
    var data = getLiveGames();
    console.log(data);
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