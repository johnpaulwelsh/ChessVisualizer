// John Sullivan and John Paul Welsh

var self;
// The beginning of the URL to communicate with the server, to be appended later
var gameID = "https://10.11.18.65/cg/chess/";
// Variables for each field in the JSON data from the server
var lastmovenumber;
var blacktime;
var gameover;
var whitesturn;
var moves;
var whitetime;

// Constructor: initializes a LoadGame object
var LoadGame = function (shortGameID, piecestheme) {
    self = this;
    self.init(shortGameID, piecestheme);
}

// Sets global variables to values in the JSON object
LoadGame.prototype.init = function (shortGameID, piecestheme) {
    // Appends game ID to prefix, creating a whole URL
    gameID = gameID + shortGameID;

    $(document).ready(function() {
        // Using the core $.ajax() method
        $.getJSON(gameID, function(resp) {
            // For each field:value pair in the object
            $.each(resp, function(key, value) {
                // Sets values to respective variables when they are reached in the "for loop"
                if (key == "lastmovenumber")
                        lastmovenumber = value;
                if (key == "blacktime")
                        blacktime = value;
                if (key == "gameover")
                        gameover = value;
                if (key == "whitesturn")
                        whitesturn = value;
                if (key == "moves")
                        moves = value;
                if (key == "whitetime")
                        whitetime = value;
            })
        });
    
        // We need to wait 3 seconds to make sure we are done talking to the server
        // Then we create a ChessGame object
        setTimeout(function() {
            var chessgame = new ChessGame(
                piecestheme, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime);
            }, 3000);
    });
}