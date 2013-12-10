// John Sullivan and John Paul Welsh

var self;

var piece_board;

var w_king, w_queen, w_l_bishop, w_r_bishop, w_l_knight, w_r_knight, w_l_rook, w_r_rook;
//var w_pawns = [];
var b_king, b_queen, b_l_bishop, b_r_bishop, b_l_knight, b_r_knight, b_l_rook, b_r_rook;
//var b_pawns = [];
var w_pawnlist;
var b_pawnlist;

var pcsobj;
var pcsmtl;

var pieceArray = [];

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
var Board = function(loader, piecestheme) {
    self = this;
    
    if (piecestheme == 'monkey') {
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    } else if (piecestheme == 'second') {
        pcsobj = secondpcsobj;
        pcsmtl = secondpcsmtl;
    } else {
        window.alert("No theme chosen.");
    }

    // initialize board
    self.init(loader, piecestheme);
};

// Initialize board by placing piecestheme into proper spots
Board.prototype.init = function (loader, piecestheme) {
    
    piece_board = new THREE.Object3D();

    // chessboard
    loader.load('objects/chessboardrotated.obj', 'objects/chessboardrotated.mtl', function (object) {
        object.scale.x = 20;
        object.scale.y = 20;
        object.scale.z = 20;

        chessboard = object;
        piece_board.add(chessboard);
    });

    game.add(piece_board);

    w_l_bishop = new Bishop(loader, piecestheme, 'white', 'left', pcsobj[0], pcsmtl[0]);
    w_r_bishop = new Bishop(loader, piecestheme, 'white', 'right', pcsobj[0], pcsmtl[0]);
    b_l_bishop = new Bishop(loader, piecestheme, 'black', 'left', pcsobj[1], pcsmtl[1]);
    b_r_bishop = new Bishop(loader, piecestheme, 'black', 'right', pcsobj[1], pcsmtl[1]);

    w_l_rook = new Rook(loader, piecestheme, 'white', 'left', pcsobj[2], pcsmtl[2]);
    w_r_rook = new Rook(loader, piecestheme, 'white', 'right', pcsobj[2], pcsmtl[2]);
    b_l_rook = new Rook(loader, piecestheme, 'black', 'left', pcsobj[3], pcsmtl[3]);
    b_r_rook = new Rook(loader, piecestheme, 'black', 'right', pcsobj[3], pcsmtl[3]);

    w_king = new King(loader, piecestheme, 'white', pcsobj[4], pcsmtl[4]);
    b_king = new King(loader, piecestheme, 'black', pcsobj[5], pcsmtl[5]);

    w_queen = new Queen(loader, piecestheme, 'white', pcsobj[6], pcsmtl[6]);
    b_queen = new Queen(loader, piecestheme, 'black', pcsobj[7], pcsmtl[7]);

    w_l_knight = new Knight(loader, piecestheme, 'white', 'left', pcsobj[8], pcsmtl[8]);
    w_r_knight = new Knight(loader, piecestheme, 'white', 'right', pcsobj[8], pcsmtl[8]);
    b_l_knight = new Knight(loader, piecestheme, 'black', 'left', pcsobj[9], pcsmtl[9]);
    b_r_knight = new Knight(loader, piecestheme, 'black', 'right', pcsobj[9], pcsmtl[9]);

    w_pawnlist = new PawnList(loader, 'white', pcsobj[10], pcsmtl[10]);
    b_pawnlist = new PawnList(loader, 'black', pcsobj[11], pcsmtl[11]);

    pieceArray = [
        w_l_rook, w_l_knight, w_l_bishop, w_queen, w_king, w_r_bishop, w_r_knight, w_r_rook,
        w_pawnlist[0], w_pawnlist[1], w_pawnlist[2], w_pawnlist[3], w_pawnlist[4], w_pawnlist[5], w_pawnlist[6], w_pawnlist[7],
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        b_pawnlist[7], b_pawnlist[6], b_pawnlist[5], b_pawnlist[4], b_pawnlist[3], b_pawnlist[2], b_pawnlist[1], b_pawnlist[0],
        b_r_rook, b_r_knight, b_r_bishop, b_queen, b_king, b_l_bishop, b_l_knight, b_l_rook
    ];
};

// Incrementally moves piece from fw, fx to fy, fz
Board.prototype.movePiece = function (fw, fx, fy, fz, fheight) {
    if (pieceArray[(fz-1)*8+(fy-97)] != 1)
        remove(fy, fz);

    pieceArray[(fx-1)*8+(fw-97)].translateY(fheight);

    //pieceArray[(fw-64)*8+fx].translateX((fy-fw)*100/7);
    //pieceArray[(fw-64)*8+fx].translateZ((fz-fx)*100/7);
    //pieceArray[(fw-64)*8+fx].translateY(-fheight);
    //pieceArray[(fy-64)*8+fz] = pieceArray[(fw-64)*8+fx];
    //pieceArray[(fw-64)*8+fx] = 1;
}

function remove(fy, fz) {
    console.log("Removed at " + fy + " " + fz);
}