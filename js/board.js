// John Sullivan and John Paul Welsh

var self;

// Variable for loaded board object
var piece_board;

// Variables for each piece on the board
var piece_w_king, piece_w_queen, piece_w_l_bishop, piece_w_r_bishop, piece_w_l_knight, piece_w_r_knight, piece_w_l_rook, piece_w_r_rook;
var piece_b_king, piece_b_queen, piece_b_l_bishop, piece_b_r_bishop, piece_b_l_knight, piece_b_r_knight, piece_b_l_rook, piece_b_r_rook;
var w_pawn0, w_pawn1, w_pawn2, w_pawn3, w_pawn4, w_pawn5, w_pawn6, w_pawn7;
var b_pawn0, b_pawn1, b_pawn2, b_pawn3, b_pawn4, b_pawn5, b_pawn6, b_pawn7;

// Get set to either the monkey set or second set in the constructor
var pcsobj;
var pcsmtl;

// Holds the pieces and updates when the pieces move
var pieceArray = [];

// Variable lists to store filepaths for the .obj and .mtl files
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
    
    piece_w_l_bishop = new W_L_Bishop(loader, pcsobj[0], pcsmtl[0]);
    piece_w_r_bishop = new W_R_Bishop(loader, pcsobj[0], pcsmtl[0]);
    piece_b_l_bishop = new B_L_Bishop(loader, pcsobj[1], pcsmtl[1]);
    piece_b_r_bishop = new B_R_Bishop(loader, pcsobj[1], pcsmtl[1]);

    piece_w_l_rook = new W_L_Rook(loader, pcsobj[2], pcsmtl[2]);
    piece_w_r_rook = new W_R_Rook(loader, pcsobj[2], pcsmtl[2]);
    piece_b_l_rook = new B_L_Rook(loader, pcsobj[3], pcsmtl[3]);
    piece_b_r_rook = new B_R_Rook(loader, pcsobj[3], pcsmtl[3]);

    piece_w_king = new W_King(loader, pcsobj[4], pcsmtl[4]);
    piece_b_king = new B_King(loader, pcsobj[5], pcsmtl[5]);

    piece_w_queen = new W_Queen(loader, pcsobj[6], pcsmtl[6]);
    piece_b_queen = new B_Queen(loader, pcsobj[7], pcsmtl[7]);

    piece_w_l_knight = new W_L_Knight(loader, pcsobj[8], pcsmtl[8]);
    piece_w_r_knight = new W_R_Knight(loader, pcsobj[8], pcsmtl[8]);
    piece_b_l_knight = new B_L_Knight(loader, pcsobj[9], pcsmtl[9]);
    piece_b_r_knight = new B_R_Knight(loader, pcsobj[9], pcsmtl[9]);

    w_pawn0 = new W_Pawn0(loader, pcsobj[10], pcsmtl[10]);
    w_pawn1 = new W_Pawn1(loader, pcsobj[10], pcsmtl[10]);
    w_pawn2 = new W_Pawn2(loader, pcsobj[10], pcsmtl[10]);
    w_pawn3 = new W_Pawn3(loader, pcsobj[10], pcsmtl[10]);
    w_pawn4 = new W_Pawn4(loader, pcsobj[10], pcsmtl[10]);
    w_pawn5 = new W_Pawn5(loader, pcsobj[10], pcsmtl[10]);
    w_pawn6 = new W_Pawn6(loader, pcsobj[10], pcsmtl[10]);
    w_pawn7 = new W_Pawn7(loader, pcsobj[10], pcsmtl[10]);

    b_pawn0 = new B_Pawn0(loader, pcsobj[11], pcsmtl[11]);
    b_pawn1 = new B_Pawn1(loader, pcsobj[11], pcsmtl[11]);
    b_pawn2 = new B_Pawn2(loader, pcsobj[11], pcsmtl[11]);
    b_pawn3 = new B_Pawn3(loader, pcsobj[11], pcsmtl[11]);
    b_pawn4 = new B_Pawn4(loader, pcsobj[11], pcsmtl[11]);
    b_pawn5 = new B_Pawn5(loader, pcsobj[11], pcsmtl[11]);
    b_pawn6 = new B_Pawn6(loader, pcsobj[11], pcsmtl[11]);
    b_pawn7 = new B_Pawn7(loader, pcsobj[11], pcsmtl[11]);
    
    pieceArray = [
        piece_w_l_rook, piece_w_l_knight, piece_w_l_bishop, piece_w_queen, piece_w_king, piece_w_r_bishop, piece_w_r_knight, piece_w_r_rook,
        w_pawn0, w_pawn1, w_pawn2, w_pawn3, w_pawn4, w_pawn5, w_pawn6, w_pawn7,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        b_pawn7, b_pawn6, b_pawn5, b_pawn4, b_pawn3, b_pawn2, b_pawn1, b_pawn0,
        piece_b_r_rook, piece_b_r_knight, piece_b_r_bishop, piece_b_queen, piece_b_king, piece_b_l_bishop, piece_b_l_knight, piece_b_l_rook
    ];
};

// Incrementally moves piece from fw, fx to fy, fz
Board.prototype.movePiece = function (fw, fx, fy, fz, fheight) {
    if (pieceArray[(fz-1)*8+(fy-97)] != 1)
        remove(fy, fz);
    pieceArray[(fx-1)*8+(fw-97)].moveY(fheight);
    pieceArray[(fx-1)*8+(fw-97)].moveX((fy-fw)*100/7);
    pieceArray[(fx-1)*8+(fw-97)].moveZ((fx-fz)*100/7);
    pieceArray[(fx-1)*8+(fw-97)].moveY(-fheight);
    pieceArray[(fz-1)*8+(fy-97)] = pieceArray[(fw-64)*8+fx];
    pieceArray[(fx-1)*8+(fw-97)] = 1;
}

function remove(fy, fz) {
    console.log("Removed at " + fy + " " + fz);
}