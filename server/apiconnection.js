const request = require('request');

var apikey = 'ad4e9b54cfdc73473787113ab18601f16cd0e3610af8a856b74b394145d3803c';
function getLiveGames(mwRequest,mwResult,mwNext){
    var urlLive = "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey="+apikey;
    mwRequest.livedata = [];

    request({url: urlLive, json: true}, (error, response) => {
        if(response.body.success == 1){
            mwRequest.liveamount = response.body.result.length-1; // Anzahl der Live-Spiele
            response.body.result.forEach(function(res) {
                mwRequest.livedata.push(res.event_home_team); // teamname 1
                mwRequest.livedata.push(res.event_away_team); // teamname 2
                mwRequest.livedata.push(res.event_final_result); // standings (form: XXhometeam - XXenemyteam)
                mwRequest.livedata.push(res.event_date); // startdatum
                mwRequest.livedata.push(res.event_time); // startzeit
                mwRequest.livedata.push(res.league_name); // liganame
                if(res.country_name != 'World'){mwRequest.livedata.push(res.country_name)} // Land
                else{mwRequest.livedata.push('International')}
              });
              mwNext();
        }
    })
}

function getLeagues(mwRequest,mwResult,mwNext){
    console.log(0);
    var urlLeagues = 'https://allsportsapi.com/api/basketball/?met=Leagues&APIkey='+apikey;
    mwRequest.leaguedata = [];

    request({url: urlLeagues, json: true}, (error, response) => {
        if(response.body.success == 1){
            mwRequest.leaguedata = response.body.result;
            console.log(1);
              mwNext();
        }
        else{
            mwRequest.leaguedata.push('failed');
            console.log(2);
            mwNext();
        }
    })
}

module.exports = {
    getLiveGames,
    getLeagues
}