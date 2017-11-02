var player1;
var player2;
var currentPlayer;

function Player (name, mark, space) {
  this.name = name;
  this.mark = mark;
  this.space = "";
}

var playerSwitch = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

var winnerCheck = function() {
  if (currentPlayer.space === "123" ||
      currentPlayer.space === "456" ||
      currentPlayer.space === "789" ||
      currentPlayer.space === "147" ||
      currentPlayer.space === "258" ||
      currentPlayer.space === "369" ||
      currentPlayer.space === "159" ||
      currentPlayer.space === "758") {
    alert("we have a winner");
  }
}

$(document).ready(function() {
  $("#playerNames").submit(function(event) {
    event.preventDefault();

    var player1Name = $("#player1").val();
    var player2Name = $("#player2").val();
    var player1Mark = "X";
    var player2Mark = "O";

    player1 = new Player (player1Name, player1Mark);
    player2 = new Player (player2Name, player2Mark);
    currentPlayer = player1;

    $("#playerNames").hide();
    $(".board").show();
    $("body h3").show();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row1 .column1").click(function() {
    $(".row1 .column1").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(1);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row1 .column2").click(function() {
    $(".row1 .column2").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(2);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row1 .column3").click(function() {
    $(".row1 .column3").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(3);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column1").click(function() {
    $(".row2 .column1").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(4);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column2").click(function() {
    $(".row2 .column2").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(5);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column3").click(function() {
    $(".row2 .column3").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(6);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column1").click(function() {
    $(".row3 .column1").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(7);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column2").click(function() {
    $(".row3 .column2").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(8);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column3").click(function() {
    $(".row3 .column3").text(currentPlayer.mark);
    currentPlayer.space = currentPlayer.space.concat(9);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

})
