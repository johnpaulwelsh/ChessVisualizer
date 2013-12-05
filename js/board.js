// Global variables to refer to each white piece on the board
var wking, wqueen, wbishop, wknight, wrook;
// These will be numbered 0-7
var wpawns = [];
// Global variables to refer to each black piece on the board
var bking, bqueen, bbishop, bknight, brook;
// These will be numbered 0-7
var bpawns = [];

// Refers to 'this' (the board)
var self;

var monkeypcsobj = [
    'objects/whitebishop.obj',
    'objects/blackbishop.obj',
    'objects/whiterookwithtop.obj',
    'objects/blackrook.obj',
    'objects/whiteking.obj',
    'objects/blackking.obj',
    'objects/whitequeen.obj',
    'objects/blackqueen.obj',
    'objects/whitemonkey.obj',
    'objects/whitemonkey.obj',
    'objects/whitepawn.obj',
    'objects/blackpawn.obj'
    ];

var monkeypcsmtl = [
    'objects/whitebishop.mtl',
    'objects/blackbishop.mtl',
    'objects/whiterookwithtop.mtl',
    'objects/blackrook.mtl',
    'objects/whiteking.mtl',
    'objects/blackking.mtl',
    'objects/whitequeen.mtl',
    'objects/blackqueen.mtl',
    'objects/whitemonkey.mtl',
    'objects/whitemonkey.mtl',
    'objects/whitepawn.mtl',
    'objects/blackpawn.mtl'
    ];

var secondpcs = [];

var pcsobj;
var pcsmtl;

// Constructor: builds a new board and places the pieces in their proper positions
var Board = function( loader, pieces ) {

    self = this;
    
    if (pieces == 'monkey') {
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    } else if (pieces == 'second') {
        pcsobj = secondpcsobj;
        pcsmtl = secondpcsmtl;
    } else {
        pcsobj = monkeypcsobj;
        pcsmtl = monkeypcsmtl;
    }

	loader.load( 'objects/chessboard.obj', 'objects/chessboard.mtl', function ( object ) {
	    object.scale.x = 20;
	    object.scale.y = 20;
	    object.scale.z = 20;

		board = object;
	    game.add( board );
	} );

    loader.load( pcsobj[0], pcsmtl[0], function ( object ) {
    	object.scale.x = 4;
    	object.scale.y = 6;
    	object.scale.z = 4;
    	object.translateY( 8 );
    	
    	wbishop = object;
    	game.add( wbishop );

    	wbishop.translateX( -44 );
    	wbishop.translateZ( 40 );
    	wbishop.rotation.z = 0;
    } );

    loader.load( pcsobj[1], pcsmtl[1], function ( object ) {
    	object.scale.x = 4;
    	object.scale.y = 6;
    	object.scale.z = 4;
    	object.translateY( 8 );
    	
    	bbishop = object;
    	game.add( bbishop );

    	bbishop.translateX( -44 );
    	bbishop.translateZ( -55 );
    } );

   loader.load( pcsobj[2], pcsmtl[2], function ( object ) {
    	object.scale.x = 4.5;
    	object.scale.y = 7;
    	object.scale.z = 4.5;
    	object.translateY( 5 );
    	
    	wrook = object;
    	game.add( wrook );

    	wrook.translateX( 25 );
    	wrook.translateZ( 39 );
    } );

    loader.load( pcsobj[3], pcsmtl[3], function ( object ) {
        object.scale.x = 4.5;
        object.scale.y = 7;
        object.scale.z = 4.5;
        object.translateY( 5 );
        
        brook = object;
        game.add( brook );

        brook.translateX( 25 );
        brook.translateZ( -65 );
    } );

   loader.load( pcsobj[4], pcsmtl[4], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        object.translateY( 3 );
        
        wking = object;
        game.add( wking );

        wking.translateX( -34 );
        wking.translateZ( 40 );
    } );

    loader.load( pcsobj[5], pcsmtl[5], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        object.translateY( 3 );
        
        bking = object;
        game.add( bking );

        bking.translateX( -33 );
        bking.translateZ( -59 );
    } );

   loader.load( pcsobj[6], pcsmtl[6], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 4;
        object.scale.z = 3;
        object.translateY( 3 );
        
        wqueen = object;
        game.add( wqueen );

        wqueen.translateX( -19 );
        wqueen.translateZ( 40 );
    } );

   loader.load( pcsobj[7], pcsmtl[7], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 4;
        object.scale.z = 3;
        object.translateY( 3 );
        
        bqueen = object;
        game.add( bqueen );

        bqueen.translateX( -20 );
        bqueen.translateZ( -59 );
    } );

    loader.load( pcsobj[8], pcsmtl[8], function ( object ) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;
        object.translateY( 3 );

        wknight = object;
        game.add( wknight );

        wknight.translateX( -59 );
        wknight.translateZ( 40 );
    });

    loader.load( pcsobj[9], pcsmtl[9], function ( object ) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;
        object.translateY( 3 );

        wknight = object;
        game.add( wknight );

        wknight.translateX( -59 );
        wknight.translateZ( -61 );
    });    

    loader.load( pcsobj[10], pcsmtl[10], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        wpawns[0] = object;
        game.add( wpawns[0] );

        wpawns[0].translateX( -77 );
        wpawns[0].translateZ( 22 );
    } );

    loader.load( pcsobj[11], pcsmtl[11], function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        bpawn1 = object;
        game.add( bpawn1 );

        bpawn1.translateX( -77 );
        bpawn1.translateZ( -50 );
    });
};

Board.prototype.resetBoard = function( self ) {

}

Board.prototype.cloneObj = function( obj ) {
    var i, cpy = new THREE.Object3D();
    for (var i in obj.children) {
        cpy.add(
            new THREE.Mesh(obj.children[i].geometry)
        );
    }
    return cpy;
}

Board.prototype.cloneObjMtl = function( objmtl ) {
    var i, cpy = new THREE.Object3D();
    for (var i in objmtl.children) {
        cpy.add(
            new THREE.Mesh(objmtl.children[i].geometry,
            objmtl.children[i].material)
        );
    }
    return cpy;
}

Board.prototype.movePiece = function( piece ) {
	// move piece
};

Board.prototype.run = function(  ) {
	// read instructions, move pieces
};