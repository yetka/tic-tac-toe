function Player (name, mark) {
  this.name = name;
  this.mark = mark;
}

$(document).ready(function() {
  $("#playerNames").submit(function(event) {
    event.preventDefault();

    var player1Name = $("#player1").val();
    var player2Name = $("#player2").val();
    var player1Mark = "X";
    var player2Mark = "O";

    var player1 = new Player (player1Name, player1Mark);
    var player2 = new Player (player2Name, player2Mark);

    $("#playerNames").hide();
    $(".board").show();
    $("body h3").show();
  })


})
