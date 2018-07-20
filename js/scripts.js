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
};
$(document).ready(function(){
  $("#lets-play").click(function(event){
    $("#input-one").hide();
    event.preventDefault();
  var player1name=  $("input#inputed-line1").val();
    $("#player1name").text(player1name);
    var player2name=  $("input#inputed-line2").val();
      $("#player2name").text(player2name)
  });
});
