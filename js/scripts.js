var player1;
var player2;

function Player(playername, turn) {
  this.playername = playername
  this.score = 0
  this.totalroll = 0
  this.turn = turn
};
var roll = function() {
  return Math.floor((Math.random() * 6) + 1);
};
Player.prototype.switch = function() {
  if (turn === true) {
    this.turn = false
  } else {
    this.turn = true
  }
};
Player.prototype.reset = function() {
  this.score = 0
  this.totalroll = 0
};
var score = function(){
  score+ newscore
};

$(document).ready(function() {
  $("#lets-play").click(function(event) {
    $("#input-one").hide();
    event.preventDefault();
    var player1name = $("input#inputed-line1").val();
    $("#player1name").text(player1name);
    var player2name = $("input#inputed-line2").val();
    $("#player2name").text(player2name)


    $("#roll1").click(function() {

      $("#player1score").text(roll);
    });
    $("#roll2").click(function(){
      $("#player2score").text(roll);
    })
  });
});
