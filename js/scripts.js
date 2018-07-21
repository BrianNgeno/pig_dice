$().ready(function() {
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

        player1.playerName = player1name;
        player2.playerName = player2name;
      });
      $("#new-game").click(function(event) {
        $("#player").hide();
        clearValues();
        player1.newGame();
        player2.newGame();
        $("#player1score").empty();
        $("#player1total").empty();

        $("#player2score").empty();
        $("#player2total").empty();


        $("#input-one").show();
      });
      //
      //   $("button#player1-roll").click(function(event) {
      //     player1.roll = throwdice();
      //     $("#die-roll-1").text(player1.roll);
      //     player1.rollone();
      //     $("#round-total-1").text(player1.tempscore);
      //   });
      //   $("#player2-roll").click(function(event) {
      //     player2.roll = throwdice();
      //     $("#die-roll-2").text(player2.roll);
      //     player2.rollone();
      //     $("#round-total-2").text(player2.tempscore);
      //   });
      //
      //   $("button#player1-pass").click(function(event) {
      //     player1.pass();
      //     $("#total-score-1").text(player1.totalscore);
      //     $("#round-total-1").empty();
      //     $("#die-roll-1").empty();
      //     player1.winnerCheck();
      //   });
      //   $("button#player2-pass").click(function(event) {
      //     player2.pass();
      //     $("#total-score-2").text(player2.totalscore);
      //     $("#round-total-2").empty();
      //     $("#die-roll-2").empty();
      //     player2.winnerCheck();
      //   });
      // });
      //
      //
      //
      // var player1 = "";
      // var player2 = "";
      // var throwdice = function() {
      //   return Math.floor(6 * Math.random()) + 1;
      // }
      //
      // function Player(turn) {
      //   this.roll = 0;
      //   this.tempscore = 0;
      //   this.totalscore = 0;
      //   this.turn = turn;
      //   this.playerName;
      // }
      //
      // Player.prototype.rollone = function() {
      //   if (this.roll === 1) {
      //     this.tempscore = 0;
      //     alert("Ooooppsss!" + this.playerName + ", you rolled a 1!! Your Turn Is Over!")
      //   } else {
      //     this.tempscore += this.roll;
      //   }
      // }
      // Player.prototype.pass = function() {
      //   this.totalscore += this.tempscore;
      //   this.tempscore = 0;
      //   alert(this.playerName + ",your turn is over, pass the mouse!");
      // }
      // Player.prototype.winnerCheck = function() {
      //   if (this.totalscore >= 100) {
      //     alert(this.playerName + "You are the Winner!!!");
      //   }
      // }
      // Player.prototype.newGame = function() {
      //   this.roll = 0;
      //   this.tempscore = 0;
      //   this.totalscore = 0;
      //   this.playerName = "";
      // }
      // var clearValues = function() {
      //   $(".player1Name").val("");
      //   $(".player2Name").val("");
      // }
