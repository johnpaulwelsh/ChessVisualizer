// John Sullivan and John Paul Welsh

var self;
var gameID = "https://10.11.18.65/cg/chess/";
var lastmovenumber;
var blacktime;
var gameover;
var whitesturn;
var moves;
var tempArray;
var whitetime;

var LoadGame = function (shortGameID, piecestheme) {
    self = this;
    self.init(shortGameID, piecestheme);
}

LoadGame.prototype.init = function (shortGameID, piecestheme) {
    gameID = gameID + shortGameID;

    $(document).ready(function() {
        // Using the core $.ajax() method
        $.getJSON(gameID, function(resp) {
            $.each(resp, function(key, value) {
                
                if (key == "lastmovenumber")
                        lastmovenumber = value;
                if (key == "blacktime")
                        blacktime = value;
                if (key == "gameover")
                        gameover = value;
                if (key == "whitesturn")
                        whitesturn = value;
                if (key == "moves")
                        moves = value[0].split(",");
                if (key == "whitetime")
                        whitetime = value;
            })
        });
    
        // We need to wait 3 seconds to make sure we are done talking to the server
        setTimeout(function() {
            var chessgame = new ChessGame(
                piecestheme, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime);
            },
            3000
        );
    });
}