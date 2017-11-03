var player1;
var player2;
var currentPlayer;

function Player (name, mark) {
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

function checkCombination (combination, space) {
  var total = 0;
  for (var i=0;i<combination.length;i++) {
    if (space.includes(combination[i])) {
      total++;
    }
  }
  if (total===combination.length) {
    return true;
  } else {
    return false;
  }
}

var winnerCheck = function() {
  var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

  for (index=0;index<winningCombinations.length;index++) {
    if (checkCombination(winningCombinations[index],currentPlayer.space)) {
      alert("we have a winner");
    }
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
    if (!$(".row1 .column1 p").length) {
      $(".row1 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(1);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row1 .column2").click(function() {
    if (!$(".row1 .column2 p").length) {
      $(".row1 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(2);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row1 .column3").click(function() {
    if (!$(".row1 .column3 p").length) {
      $(".row1 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(3);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row2 .column1").click(function() {
    if (!$(".row2 .column1 p").length) {
      $(".row2 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(4);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row2 .column2").click(function() {
    if (!$(".row2 .column2 p").length) {
      $(".row2 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(5);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row2 .column3").click(function() {
    if (!$(".row2 .column3 p").length) {
      $(".row2 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(6);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row3 .column1").click(function() {
    if (!$(".row3 .column1 p").length) {
      $(".row3 .column1").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(7);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row3 .column2").click(function() {
    if (!$(".row3 .column2 p").length) {
      $(".row3 .column2").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(8);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

  $(".row3 .column3").click(function() {
    if (!$(".row3 .column3 p").length) {
      $(".row3 .column3").append("<p>" + currentPlayer.mark + "</p>");
      currentPlayer.space.push(9);
      winnerCheck();
      playerSwitch();
      $("#currentPlayer").text(currentPlayer.name);
    } else {
      alert("Please choose an empty square");
    }
  })

})
