var player1;
var player2;

function Player(playername, turn) {
  this.playername = playername
  this.score = 0
  this.totalroll = 0
  this.turn = turn
};
Player.prototype.roll = function() {
  document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 6);
};
Player.prototype.swith = function() {
    if (turn === true) {
      this.turn = false
    } else {
      this.turn = true
    }
  };
    Player.prototype.reset = function() {
      this.score = 0
      this.totalroll = 0
    }
