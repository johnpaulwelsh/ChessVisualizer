// John Sullivan and John Paul Welsh

// Global variable for the board
var brd;

// Global variables to refer to each white piece on the board
var w_king, w_queen, w_l_bishop, w_r_bishop, w_l_knight, w_r_knight, w_l_rook, w_r_rook;
// These will be numbered 0-7
var wpawns = [];

// Global variables to refer to each black piece on the board
var b_king, b_queen, b_l_bishop, b_r_bishop, b_l_knight, b_r_knight, b_l_rook, b_r_rook;
// These will be numbered 0-7
var bpawns = [];

// Refers to 'this' (the board object, not the board model)
var self;

var pcsobj;
var pcsmtl;

var pieceArray = [
w_l_rook, w_l_knight, w_l_bishop, w_queen, w_king, w_r_bishop, w_r_knight, w_r_rook,
w_pawns[0], w_pawns[1], w_pawns[2], w_pawns[3], w_pawns[4], w_pawns[5], w_pawns[6], w_pawns[7],
1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1,
b_pawns[7], b_pawns[6], b_pawns[5], b_pawns[4], b_pawns[3], b_pawns[2], b_pawns[1], b_pawns[0],
b_r_rook, b_r_knight, b_r_bishop, b_queen, b_king, b_l_bishop, b_l_knight, b_l_rook];

/*
0 = white bishop
1 = black bishop
2 = white rook
3 = black rook
4 = white king
5 = black king
6 = white queen
7 = black queen
8 = white knight
9 = black knight
10 = white pawn
11 = black pawn
*/

var monkeypcsobj = [
    'objects/monkey/whitebishop.obj',
    'objects/monkey/blackbishop.obj',
    'objects/monkey/whiterook.obj',
    'objects/monkey/blackrook.obj',
    'objects/monkey/whiteking.obj',
    'objects/monkey/blackking.obj',
    'objects/monkey/whitequeen.obj',
    'objects/monkey/blackqueen.obj',
    'objects/monkey/whitemonkey.obj',
    'objects/monkey/blackmonkey.obj',
    'objects/monkey/whitepawn.obj',
    'objects/monkey/blackpawn.obj'
];

var monkeypcsmtl = [
    'objects/monkey/whitebishop.mtl',
    'objects/monkey/blackbishop.mtl',
    'objects/monkey/whiterook.mtl',
    'objects/monkey/blackrook.mtl',
    'objects/monkey/whiteking.mtl',
    'objects/monkey/blackking.mtl',
    'objects/monkey/whitequeen.mtl',
    'objects/monkey/blackqueen.mtl',
    'objects/monkey/whitemonkey.mtl',
    'objects/monkey/blackmonkey.mtl',
    'objects/monkey/whitepawn.mtl',
    'objects/monkey/blackpawn.mtl'
];

var secondpcsobj = [
    'objects/second/whitebishop.obj',
    'objects/second/blackbishop.obj',
    'objects/second/whiterook.obj',
    'objects/second/blackrook.obj',
    'objects/second/whiteking.obj',
    'objects/second/blackking.obj',
    'objects/second/whitequeen.obj',
    'objects/second/blackqueen.obj',
    'objects/second/whiteknight.obj',
    'objects/second/blackknight.obj',
    'objects/second/whitepawn.obj',
    'objects/second/blackpawn.obj'
];

var secondpcsmtl = [
    'objects/second/whitebishop.mtl',
    'objects/second/blackbishop.mtl',
    'objects/second/whiterook.mtl',
    'objects/second/blackrook.mtl',
    'objects/second/whiteking.mtl',
    'objects/second/blackking.mtl',
    'objects/second/whitequeen.mtl',
    'objects/second/blackqueen.mtl',
    'objects/second/whiteknight.mtl',
    'objects/second/blackknight.mtl',
    'objects/second/whitepawn.mtl',
    'objects/second/blackpawn.mtl'
];

// Constructor: builds a new board and chooses which set of pieces to load in
var Board = function(loader, pieces) {

    self = this;
    
    if (pieces == 'monkey') {
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    } else {
        pcsobj = secondpcsobj;
        pcsmtl = secondpcsmtl;
    }

    // initialize board
    self.init(loader, pieces);
};

// Initialize board by placing pieces into proper spots
Board.prototype.init = function (loader, pieces) {
    // chessboard
    loader.load('objects/chessboardrotated.obj', 'objects/chessboardrotated.mtl', function (object) {
        object.scale.x = 20;
        object.scale.y = 20;
        object.scale.z = 20;

        brd = object;
        game.add(brd);
    });

    w_l_bishop = new Bishop(loader, pieces, 'white', 'left', pcsobj[0], pcsmtl[0]);
    w_r_bishop = new Bishop(loader, pieces, 'white', 'right', pcsobj[0], pcsmtl[0]);
    b_l_bishop = new Bishop(loader, pieces, 'black', 'left', pcsobj[1], pcsmtl[1]);
    b_r_bishop = new Bishop(loader, pieces, 'black', 'right', pcsobj[1], pcsmtl[1]);

    w_l_rook = new Rook(loader, pieces, 'white', 'left', pcsobj[2], pcsmtl[2]);
    w_r_rook = new Rook(loader, pieces, 'white', 'right', pcsobj[2], pcsmtl[2]);
    b_l_rook = new Rook(loader, pieces, 'black', 'left', pcsobj[3], pcsmtl[3]);
    b_r_rook = new Rook(loader, pieces, 'black', 'right', pcsobj[3], pcsmtl[3]);

    w_king = new King(loader, pieces, 'white', pcsobj[4], pcsmtl[4]);
    b_king = new King(loader, pieces, 'black', pcsobj[5], pcsmtl[5]);

    w_queen = new Queen(loader, pieces, 'white', pcsobj[6], pcsmtl[6]);
    b_queen = new Queen(loader, pieces, 'black', pcsobj[7], pcsmtl[7]);

    w_l_knight = new Knight(loader, pieces, 'white', 'left', pcsobj[8], pcsmtl[8]);
    w_r_knight = new Knight(loader, pieces, 'white', 'right', pcsobj[8], pcsmtl[8]);
    b_l_knight = new Knight(loader, pieces, 'black', 'left', pcsobj[9], pcsmtl[9]);
    b_r_knight = new Knight(loader, pieces, 'black', 'right', pcsobj[9], pcsmtl[9]);

    for (var i = 0; i < 8; i++) {
        wpawns[i] = new Pawn(loader, pieces, 'white', i, pcsobj[10], pcsmtl[10]);
    }

    for (var i = 0; i < 8; i++) {
        bpawns[i] = new Pawn(loader, pieces, 'black', i, pcsobj[11], pcsmtl[11]);
    }

};

Board.prototype.changePieces = function(loader, pieces) {
    // reload the board with pieces changed
    if (pieces == 'monkey') {
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    } else if (pieces == 'second') {
        pcsobj = secondpcsobj;
        pcsmtl = secondpcsmtl;
    } else {
        // default is monkey
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    }

    self.init(loader, pieces);
};

Board.prototype.resetBoard = function(loader, pieces) {
    self.init(loader, pieces);
};

/*
Board.prototype.cloneObj = function(obj) {
    var i, cpy = new THREE.Object3D();
    for (var i in obj.children) {
        cpy.add(new THREE.Mesh(obj.children[i].geometry));
    }
    return cpy;
};

Board.prototype.cloneObjMtl = function(objmtl) {
    var i, cpy = new THREE.Object3D();
    for (var i in objmtl.children) {
        cpy.add(new THREE.Mesh(objmtl.children[i].geometry, objmtl.children[i].material));
    }
    return cpy;
};
*/

// incrementally moves piece from fw, fx to fy, fz
Board.prototype.movePiece = function (movingPiece, fw, fx, fy, fz, fheight) {
    if (movingPiece.position.y < fheight) {
        movingPiece.translateY(1);
    }

    if (movingPiece.position.x < fy) {
        movingPiece.translateX(1);
    }

    if (movingPiece.position.x < fy) {
        movingPiece.translateY(1);
    }
}