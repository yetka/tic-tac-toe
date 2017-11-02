var player1;
var player2;
var currentPlayer;

function Player (name, mark, space) {
  this.name = name;
  this.mark = mark;
  this.space = [];
}

var playerSwitch = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

var winnerCheck = function() {
  if ((currentPlayer.space.includes(1)) && (currentPlayer.space.includes(2)) && (currentPlayer.space.includes(3))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(4)) && (currentPlayer.space.includes(5)) && (currentPlayer.space.includes(6))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(7)) && (currentPlayer.space.includes(8)) && (currentPlayer.space.includes(9))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(1)) && (currentPlayer.space.includes(4)) && (currentPlayer.space.includes(7))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(2)) && (currentPlayer.space.includes(5)) && (currentPlayer.space.includes(8))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(3)) && (currentPlayer.space.includes(6)) && (currentPlayer.space.includes(9))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(1)) && (currentPlayer.space.includes(5)) && (currentPlayer.space.includes(9))) {
    alert("we have a winner");
  }
  if ((currentPlayer.space.includes(3)) && (currentPlayer.space.includes(5)) && (currentPlayer.space.includes(7))) {
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
    currentPlayer.space.push(1);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row1 .column2").click(function() {
    $(".row1 .column2").text(currentPlayer.mark);
    currentPlayer.space.push(2);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row1 .column3").click(function() {
    $(".row1 .column3").text(currentPlayer.mark);
    currentPlayer.space.push(3);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column1").click(function() {
    $(".row2 .column1").text(currentPlayer.mark);
    currentPlayer.space.push(4);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column2").click(function() {
    $(".row2 .column2").text(currentPlayer.mark);
    currentPlayer.space.push(5);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row2 .column3").click(function() {
    $(".row2 .column3").text(currentPlayer.mark);
    currentPlayer.space.push(6);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column1").click(function() {
    $(".row3 .column1").text(currentPlayer.mark);
    currentPlayer.space.push(7);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column2").click(function() {
    $(".row3 .column2").text(currentPlayer.mark);
    currentPlayer.space.push(8);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

  $(".row3 .column3").click(function() {
    $(".row3 .column3").text(currentPlayer.mark);
    currentPlayer.space.push(9);
    winnerCheck();
    playerSwitch();
    $("#currentPlayer").text(currentPlayer.name);
  })

})
