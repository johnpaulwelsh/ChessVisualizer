// John Sullivan and John Paul Welsh

var self;
var container, stats;
var camera, scene, renderer, loader;
var game, board;
var cameraAngle;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

// Constructor: initializes a new ChessGame object
var ChessGame = function (piecestheme, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {
    self = this;
    self.init(piecestheme, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime);
}

// Most outer-shell THREE.js stuff like lighting, camera, scene graph, etc.
ChessGame.prototype.init = function (piecestheme, lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 70;
    camera.position.y = 70;

    // Use these values for when it's black's turn
    //camera.position.z = -90;
    //camera.position.y = 90;

    scene = new THREE.Scene();

    var ambient = new THREE.AmbientLight(0x101010); // color in hex (gray)
    scene.add(ambient);

    var directionalLightOne = new THREE.DirectionalLight(0xffffff); // white light
    directionalLightOne.position.set(0.5, 2, 1).normalize(); // position - origin = direction
    scene.add(directionalLightOne);

    var directionalLightTwo = new THREE.DirectionalLight(0xffff00); // yellow light is ffff00
    directionalLightTwo.position.set(0.5, 5, -10).normalize();
    scene.add(directionalLightTwo);

    game = new THREE.Object3D();

    loader = new THREE.OBJMTLLoader();
    
    board = new Board(loader, piecestheme);

    // Add game to scene graph and shifts it over so it's not offscreen
	scene.add(game);
    game.position.x = 15;

   	renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    // dat.gui object and definitions
    var control = new ControlPanel();
    var gui = new dat.GUI();
    var f1 = gui.addFolder('Game controls');
    // Adds a slider for changing the camera angle along the y-axis
    cameraAngle = f1.add(camera.position, 'y', 5, 150);

    // Reads the moves in from the server and runs the game
    readMoves(lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime);

    // Starts the rendering process
    render();
}

// Constructor: dat.gui object
var ControlPanel = function() {
    this.angle = 75;
    cameraAngle = this.angle;
};

// Didn't want to get rid of this, but didn't have much to put in it
window.onload = function() {
    console.log("Welcome to chess!");
};

// Updates image when the window size changes
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

/*
UNUSED VERSION OF READMOVES, THAT CONTINUOUSLY CALLS THE SERVER
// Iterates through the array read from the server and makes each move.
// No more than one move a second
function readMoves(lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {
    var movesString = moves.toString();
    var movesArray = movesString.split(',');
    
    // To be called once we have already iterated through the original
    setInterval(function(){
        $.getJSON(gameID, function(resp){
            $.each( resp, function( key, value ) {
                if (key=="moves")
                    moves = value;
                    movesString = moves.toString();
                    movesArray = movesString.split(',');
                for (var count = 0; count<moves.length; count++) {
                    var s = moves[count];
                    setTimeout(function() {
                        var p = s.charCodeAt(0);
                        var w = s.charCodeAt(1);
                        var x = s.charAt(2);
                        var y = s.charCodeAt(3);
                        var z = s.charAt(4);
                        if (p==75 && Math.abs(x-z)==2)
                            movePiece(w, (4.5+1.75*(z-x)), w, (z-x)/2+x, 25);
                        if (p==78)
                            movePiece(w,x,y,z,25);
                        else
                            movePiece(w, x, y, z, 0);
                    }, 1000);
                }
            })
        });
    }, 3000);

}
*/

function readMoves(lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {
    var movesString = moves.toString();
    var movesArray = movesString.split(',');

    console.log(movesArray);

    // Waits 2 seconds before it moves pieces, so the user gets to see it
    setTimeout(function() {
 //       setInterval(function(){myTimer()},33);
 //       var timer= function myTimer{
        for (var i = 0; i < movesArray.length; i++) {
                    // If the array index is an even number, it's white's turn
                    // Since we do not have smooth animation, this will blink to the perspective
                    // of the last player to make a move
                    if (i % 2 == 0) {
                        camera.position.z = 70;
                        camera.position.y = 70;
                    } else {
                        camera.position.z = -90;
                        camera.position.y = 90;
                    }
                    
                    var s = movesArray[i];
                    var p = s.charCodeAt(0);
                    var w = s.charCodeAt(1);
                    var x = s.charAt(2);
                    var y = s.charCodeAt(3);
                    var z = s.charAt(4);
                    // The king is moving two spaces, so we know he is castling
                    if (p == 75 && Math.abs(x-z) == 2)
                        movePiece(w, (4.5+1.75*(z-x)), w, (z-x)/2+x, 25);
                    
                    // The piece is a knight, so we know it has to jump
                    if (p == 78)
                        movePiece(w, x, y, z, 25);
                    // Any other piece does not have to jump
                    else
                        movePiece(w, x, y, z, 0);
                    
//                    if (i===movesArray.length)
//                        clearInterval(timer);
//                } 
        }
    }, 3000);

    setTimeout(function() {
        if (gameover == "true" || gameover == true) {
            window.alert("Game over! Thanks for playing!");
        }
    }, 7000);
}

// Function to move pieces
function movePiece(fw, fx, fy, fz, fheight) {
    board.movePiece(fw, fx, fy, fz, fheight);
}

// Rendering loop (calls itself)
function render() {
    requestAnimationFrame(render);
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}