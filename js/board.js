var wking, wqueen, wbishop, wknight, wrook;
var wpawn1, wpawn2, wpawn3, wpawn4, wpawn5, wpawn6, wpawn7, wpawn8;
var bking, bqueen, bbishop, bknight, brook;
var bpawn1, bpawn2, bpawn3, bpawn4, bpawn5, bpawn6, bpawn7, bpawn8;

var self;

var Board = function( loader ) {

    self = this;

	loader.load( 'objects/chessboard.obj', 'objects/chessboard.mtl', function ( object ) {
	    object.scale.x = 20;
	    object.scale.y = 20;
	    object.scale.z = 20;

		board = object;
	    game.add( board );
	} );

    loader.load( 'objects/whitebishop.obj', 'objects/whitebishop.mtl', function ( object ) {
    	object.scale.x = 4;
    	object.scale.y = 4;
    	object.scale.z = 4;
    	object.translateY( 8 );
    	
    	wbishop = object;
    	game.add( wbishop );

    	wbishop.translateX( -44 );
    	wbishop.translateZ( 40 );
    	wbishop.rotation.z = 0;
    } );

    loader.load( 'objects/blackbishop.obj', 'objects/blackbishop.mtl', function ( object ) {
    	object.scale.x = 4;
    	object.scale.y = 4;
    	object.scale.z = 4;
    	object.translateY( 8 );
    	
    	bbishop = object;
    	game.add( bbishop );

    	bbishop.translateX( -44 );
    	bbishop.translateZ( -55 );
    } );

   loader.load( 'objects/whiterookwithtop.obj', 'objects/whiterookwithtop.mtl', function ( object ) {
    	object.scale.x = 4.5;
    	object.scale.y = 6;
    	object.scale.z = 4.5;
    	object.translateY( 5 );
    	
    	wrook = object;
    	game.add( wrook );

    	wrook.translateX( 25 );
    	wrook.translateZ( 39 );
    } );

    loader.load( 'objects/blackrook.obj', 'objects/blackrook.mtl', function ( object ) {
        object.scale.x = 4.5;
        object.scale.y = 6;
        object.scale.z = 4.5;
        object.translateY( 5 );
        
        brook = object;
        game.add( brook );

        brook.translateX( 25 );
        brook.translateZ( -65 );
    } );

   loader.load( 'objects/whiteking.obj', 'objects/whiteking.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        object.translateY( 3 );
        
        wking = object;
        game.add( wking );

        wking.translateX( -34 );
        wking.translateZ( 40 );
    } );

    loader.load( 'objects/blackking.obj', 'objects/blackking.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        object.translateY( 3 );
        
        bking = object;
        game.add( bking );

        bking.translateX( -33 );
        bking.translateZ( -59 );
    } );

   loader.load( 'objects/whitequeen.obj', 'objects/whitequeen.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 4;
        object.scale.z = 3;
        object.translateY( 3 );
        
        wqueen = object;
        game.add( wqueen );

        wqueen.translateX( -19 );
        wqueen.translateZ( 40 );
    } );

   loader.load( 'objects/blackqueen.obj', 'objects/blackqueen.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 4;
        object.scale.z = 3;
        object.translateY( 3 );
        
        bqueen = object;
        game.add( bqueen );

        bqueen.translateX( -20 );
        bqueen.translateZ( -59 );
    } );

    loader.load( 'objects/whitepawn.obj', 'objects/whitepawn.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        wpawn1 = object;
        game.add( wpawn1 );

        wpawn1.translateX( -77 );
        wpawn1.translateZ( 22 );
    } );

    /*
    wpawn2 = self.cloneObj( wpawn1 );
    wpawn2.translateX( -67 );
    wpawn2.translateZ( 22 );
    */

    loader.load( 'objects/blackpawn.obj', 'objects/blackpawn.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        bpawn1 = object;
        game.add( bpawn1 );

        bpawn1.translateX( -77 );
        bpawn1.translateZ( -50 );
    });

    loader.load( 'objects/whitemonkey.obj', 'objects/whitemonkey.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        wknight = object;
        game.add( wknight );

        wknight.translateX( -7 );
        wknight.translateZ( -5 );
    });
};

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