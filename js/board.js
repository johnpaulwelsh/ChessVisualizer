// John Paul Welsh

// Global variables to refer to each white piece on the board
var wking, wqueen, wbishop, wknight, wrook;
// These will be numbered 0-7
var wpawns = [];
// Global variables to refer to each black piece on the board
var bking, bqueen, bbishop, bknight, brook;
// These will be numbered 0-7
var bpawns = [];

// Refers to 'this' (the board object, not the board model)
var self;

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
    'objects/second/whitebishop.obj',
    'objects/second/blackbishop.obj',
    'objects/second/whiterook.obj',
    'objects/second/blackrook.obj',
    'objects/second/whiteking.obj',
    'objects/second/blackking.obj',
    'objects/second/whitequeen.obj',
    'objects/second/blackqueen.obj',
    'objects/second/whitemonkey.obj',
    'objects/second/blackmonkey.obj',
    'objects/second/whitepawn.obj',
    'objects/second/blackpawn.obj'
    ];

var monkeypcsmtl = [
    'objects/second/whitebishop.mtl',
    'objects/second/blackbishop.mtl',
    'objects/second/whiterook.mtl',
    'objects/second/blackrook.mtl',
    'objects/second/whiteking.mtl',
    'objects/second/blackking.mtl',
    'objects/second/whitequeen.mtl',
    'objects/second/blackqueen.mtl',
    'objects/second/whitemonkey.mtl',
    'objects/second/blackmonkey.mtl',
    'objects/second/whitepawn.mtl',
    'objects/second/blackpawn.mtl'
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

var pcsobj;
var pcsmtl;

// Constructor: builds a new board and chooses which set of pieces to load in
var Board = function(loader, pieces) {

    self = this;
    
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

    // initialize board
    self.init(loader, pieces);
};

// Initialize board by placing pieces into proper spots
Board.prototype.init = function (loader, pieces) {
    // chessboard
    loader.load('objects/chessboard.obj', 'objects/chessboard.mtl', function (object) {
        object.scale.x = 20;
        object.scale.y = 20;
        object.scale.z = 20;

        board = object;
        game.add(board);
    });

    // white bishop
    loader.load(pcsobj[0], pcsmtl[0], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 4;
            object.scale.y = 6;
            object.scale.z = 4;
        } else {
            object.scale.x = 3;
            object.scale.y = 6;
            object.scale.z = 3;
        }
        
        wbishop = object;
        game.add(wbishop);

        if (pieces == 'monkey') {
            wbishop.translateX(-44);
            wbishop.translateZ(40);
        } else {
            wbishop.translateX(-47);
            wbishop.translateZ(40);
        }
    });

    // black bishop
    loader.load(pcsobj[1], pcsmtl[1], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 4;
            object.scale.y = 6;
            object.scale.z = 4;
        } else {
            object.scale.x = 3;
            object.scale.y = 6;
            object.scale.z = 3;
        }
        
        bbishop = object;
        game.add(bbishop);

        bbishop.translateX(-46);
        bbishop.translateZ(-65);
    });

    // white rook
    loader.load(pcsobj[2], pcsmtl[2], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 4.5;
            object.scale.y = 7;
            object.scale.z = 4.5;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }
        
        wrook = object;
        game.add(wrook);

        wrook.translateX(25);
        wrook.translateZ(39);
    });

    // black rook
    loader.load(pcsobj[3], pcsmtl[3], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 4.5;
            object.scale.y = 7;
            object.scale.z = 4.5;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }
        
        brook = object;
        game.add(brook);

        brook.translateX(25);
        brook.translateZ(-65);
    });

    // white king
    loader.load(pcsobj[4], pcsmtl[4], function (object) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        
        wking = object;
        game.add(wking);

        wking.translateX(-34);
        wking.translateZ(40);
    });

    // black king
    loader.load( pcsobj[5], pcsmtl[5], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        
        bking = object;
        game.add( bking );

        bking.translateX( -33 );
        bking.translateZ( -65 );
    } );

    // white queen
    loader.load(pcsobj[6], pcsmtl[6], function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        
        wqueen = object;
        game.add(wqueen);

        if (pieces == 'monkey') {
            wqueen.translateX(-19);
            wqueen.translateZ(40);
        } else {
            wqueen.translateX(-17);
            wqueen.translateZ(38);
        }
    });

    // black queen
    loader.load(pcsobj[7], pcsmtl[7], function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        
        bqueen = object;
        game.add(bqueen);

        bqueen.translateX(-18);
        bqueen.translateZ(-65);
    });

    // white knight
    loader.load(pcsobj[8], pcsmtl[8], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 2;
            object.scale.y = 3;
            object.scale.z = 2;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }

        wknight = object;
        game.add(wknight);

        wknight.translateX(-59);
        wknight.translateZ(40);
    });

    // black knight
    loader.load(pcsobj[9], pcsmtl[9], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 2;
            object.scale.y = 3;
            object.scale.z = 2;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }

        wknight = object;
        game.add(wknight);

        wknight.translateX(-59);
        wknight.translateZ(-65);
    });    

    // white pawn
    loader.load(pcsobj[10], pcsmtl[10], function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        wpawns[0] = object;
        game.add(wpawns[0]);

        wpawns[0].translateX(-77);
        wpawns[0].translateZ(22);
    });

    // black pawn
    loader.load(pcsobj[11], pcsmtl[11], function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        bpawns[0] = object;
        game.add(bpawns[0]);

        bpawns[0].translateX(-77);
        bpawns[0].translateZ(-50);
    });

    //bpawns[1] = new THREE.Object3D();
}

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
}

Board.prototype.resetBoard = function(loader, pieces) {
    self.init(loader, pieces);
}

Board.prototype.cloneObj = function(obj) {
    var i, cpy = new THREE.Object3D();
    for (var i in obj.children) {
        cpy.add(new THREE.Mesh(obj.children[i].geometry));
    }
    return cpy;
}

Board.prototype.cloneObjMtl = function(objmtl) {
    var i, cpy = new THREE.Object3D();
    for (var i in objmtl.children) {
        cpy.add(new THREE.Mesh(objmtl.children[i].geometry, objmtl.children[i].material));
    }
    return cpy;
}

Board.prototype.movePiece = function(piece) {
	// move piece
};

Board.prototype.run = function() {
	// read instructions, move pieces
};