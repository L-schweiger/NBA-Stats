const http = require('http');
const yargs = require('yargs');

var cmd = process.argv[2]
var argv = yargs.argv;

switch(cmd) {
    case 'alle':
        allLeagues();
        break;
    case 'land':
        countryLeagues(argv.land)
        break;
    default:
        console.log('Gültige Commands:')
        console.log('"alle" -> Liste aller Basketball-Ligen');
        console.log('"land --land=Slovenia" -> Liste von Ligen aus dem Land Slowenien')
        console.log('Länder bitte in englischer Sprache eingeben!')
  }

function allLeagues(){
    var answer;
    const options = {
        host: 'localhost',
        port: 3000,
        path: '/leagues',
        method: 'GET',
        headers: {'Content-Type': 'application/json'
        }
    };
      // buffer für evtl. streams
    var req = http.get(options, function(res) {
        var bdc = [];
        res.on('data', function(chunk) {
          bdc.push(chunk);
        })
        .on('end', function() {
          answer = JSON.parse(Buffer.concat(bdc).toString());
          answer.forEach(function(ans) {
            console.log(ans.league_name);
          });
        })
      });
}

function countryLeagues(country){
    var answer;
    const options = {
        host: 'localhost',
        port: 3000,
        path: '/leagues',
        method: 'GET',
        headers: {'Content-Type': 'application/json'
        }
    };
      // buffer für evtl. streams
    var req = http.get(options, function(res) {
        var bdc = [];
        res.on('data', function(chunk) {
          bdc.push(chunk);
        })
        .on('end', function() {
          answer = JSON.parse(Buffer.concat(bdc).toString());
          answer.forEach(function(ans) {
            if(ans.country_name == country)
            console.log(ans.league_name);
          });
        })
      });
}