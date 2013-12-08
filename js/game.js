var self;
var container, stats;
var camera, scene, renderer;
var game, board;
var pcs;
var cameraAngle;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var ChessGame = function () {
    self = this;
    self.init();
}

ChessGame.prototype.init = function () {
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
    // position(these parameters) - origin = direction
    directionalLightOne.position.set(0.5, 2, 1).normalize();
    scene.add(directionalLightOne);

    var directionalLightTwo = new THREE.DirectionalLight(0xffffff); // yellow light is ffff00
    directionalLightTwo.position.set(0.5, 5, -10).normalize();
    scene.add(directionalLightTwo);

    game = new THREE.Object3D();

    var loader = new THREE.OBJMTLLoader();
    
    var board = new Board(loader, 'monkey');

	scene.add(game);
    game.position.x = 15;

   	renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', self.onWindowResize, false);

    var ControlPanel = function() {
        this.pieces = 'pieces';
        this.angle = 75;
        cameraAngle = this.angle;
    };

    window.onload = function() {
        var control = new ControlPanel();
        var gui = new dat.GUI();
        pcs = gui.add(control, 'pieces', ['monkey', 'second']);
        cameraAngle = gui.add(camera.position, 'y', 5, 150);
    };

    render();
}

ChessGame.prototype.onWindowResize = function () {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    requestAnimationFrame(render);

    camera.lookAt(scene.position);

    //pcs.onChange(function(pcs) { board.changePieces(pcs) });

    renderer.render(scene, camera);
}