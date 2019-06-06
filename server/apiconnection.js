function getLiveGames(){

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