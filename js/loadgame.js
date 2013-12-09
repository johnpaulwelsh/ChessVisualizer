// John Sullivan and John Paul Welsh

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
                
                switch (key) {
                    case "lastmovenumber":
                        lastmovenumber = value;
                        break;
                    case "blacktime":
                        blacktime = value;
                        break;
                    case "gameover":
                        gameover = value;
                        break;
                    case "whitesturn":
                        whitesturn = value;
                        break;
                    case "moves":
                        moves = value[0].split(",");
                        break;
                    case "whitetime":
                        whitetime = value;
                        break;
                    default:
                        console.log("Somehow it wasn't any of those fields.");
                        break;
                }
            })
        });
    });

    var chessgame = new ChessGame(piecestheme);
}