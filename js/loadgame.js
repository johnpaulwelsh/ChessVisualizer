var gameID = "https://10.11.18.65/cg/chess/";
var lastmovenumber;
var blacktime;
var gameover;
var whitesturn;
var moves;
var tempArray;
var whitetime;

var LoadGame = function (shortGameID) {
    self = this;
    self.init(shortGameID);
}

LoadGame.prototype.init = function (shortGameID) {
    gameID = gameID + shortGameID;

    $(document).ready(function() {
         // Using the core $.ajax() method
        $.getJSON(gameID, function(resp) {
            $.each(resp, function(key, value) {
                if (key == "lastmovenumber")
                    lastmovenumber = value;
                else if (key == "blacktime")
                    blacktime = value;
                else if (key == "gameover")
                    gameover = value;
                else if (key == "whitesturn")
                    whitesturn = value;
                else if (key == "moves")
                    moves = value[0].split(",");
                else
                    whitetime = value;
            })
        });
    });

    var chessgame = new ChessGame(gameID, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime);
}
