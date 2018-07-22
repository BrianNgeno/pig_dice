var player1 = "";
var player2 = "";

localStorage.isActive = 'PLAYER_1';
var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}


function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    this.totalscore = 0;
    alert("OOH NO!" + this.playerName + ", you rolled a 1!! YOUR TURN IS OVER!")
    if (localStorage.isActive=='PLAYER_1') {
      $("#roll1").hide();
      $("#roll2").show();
      localStorage.isActive='PLAYER_2'
      $("#player1total").text(player1.totalscore);

    } else {
      $("#roll2").hide();
      $("#roll1").show();
      localStorage.isActive='PLAYER_1'
      $("#player2total").text(player2.totalscore);
    }
   
    
  } else {
    this.tempscore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ",YOUR TURN IS OVER, NEXT PLAYER PLEASE");
}
Player.prototype.winner = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + "YOU WON!");
  }
}

$(document).ready(function() {
  $("#lets-play").click(function(event) {
    event.preventDefault();

    player1 = new Player(true);
    player2 = new Player(false);
    $("#input-one").hide();
    $("#player").show();

    var nameplayer1 = $("#inputed-line1").val();
    $("#player1name").text(nameplayer1);

    var nameplayer2 = $("#inputed-line2").val();
    $("#player2name").text(nameplayer2);

    player1.playerName = nameplayer1;
    player2.playerName = nameplayer2;
  });

  $("#roll1").click(function(event) {
    player1.roll = throwdice();
    player2.winner();
    $("#player1score").text(player1.roll);
    player1.rollone();
    player1.winner();
    $("#die-roll1").text(player1.tempscore);
  });

  $("#roll2").click(function(event) {
    
    player2.roll = throwdice();
    player2.winner();
    $("#player2score").text(player2.roll);
    player2.rollone();
    
    $("#die-roll2").text(player2.tempscore);
  });
  

  $("#hold1").click(function(event) {
    player1.hold();
    $("#roll1").hide();
    $("#roll2").show();
    $("#player1total").text(player1.totalscore);
    $("#player1score").empty();
    $("#die-roll1").empty();
    localStorage.isActive='PLAYER_2'
    player1.winner();
    
  });
  $("#hold2").click(function(event) {
    player2.hold();
    $("#player2total").text(player2.totalscore);
    $("#player2score").empty();
    $("#die-roll2").empty();
    $("#roll2").hide();
    $("#roll1").show();
    localStorage.isActive='PLAYER_1'
    player2.winner();
  });
  $("#new-game").click(function(){
  $("#player").hide();
  $("#input-one").show();
  this.tempscore=0;
  this.totalscore=0;
  this.roll=0;
  window.location.reload();
  });
});
