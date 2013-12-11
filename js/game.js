// John Sullivan and John Paul Welsh

var self;
var container, stats;
var camera, scene, renderer, loader;
var game, board;
var cameraAngle;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

// Boolean that allows us to continue incementing our movement until we're done
var moving = false;

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
// Iterates through the array read from the server and makes each move.
// No more than one move a second
function readMoves(lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {
    
    // To be called once we have already iterated through the original
    // Perhaps it would be better to just use this overall
    setInterval(function(){
        $.getJSON(gameID, function(resp){
            $.each( resp, function( key, value ) {
                if (key=="moves")
                    moves=value[0].split(",");
                for(;count<moves.length;count++) {
                    var s= moves[count];
                    setTimeout(function() {
                        var p = s.charCodeAt(0);
                        var w = s.charCodeAt(1);
                        var x = s.charAt(2);
                        var y = s.charCodeAt(3);
                        var z = s.charAt(4);
                        if (p==75 && Math.abs(x-z)==2)
                            move(w, (4.5+1.75*(z-x)), w, (z-x)/2+x, 25);
                        if (p==78)
                            move(w,x,y,z,25);
                        else
                            move(w, x, y, z, 0);
                    }, 1000);
                }
            })
        });
    }, 3000);

}
*/

function readMoves(lastmovenumber, blacktime, gameover, whitesturn, moves, whitetime) {
    //for (var i = 0; i < moves.length; i++)
    //for (s in moves) {
        setTimeout(function() {
            var s = moves[0];
            console.log(s);
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
                movePiece(w, x, y ,z, 25);
            // Any other piece does not have to jump
            else
                movePiece(w, x, y, z, 0);
        }, 2000);
    //}
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