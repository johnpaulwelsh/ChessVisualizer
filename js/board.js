var wking, wqueen, wbishop, wknight, wrook, wpawn;
var bking, bqueen, bbishop, bknight, brook, bpawn;

var Board = function( loader ) {
	loader.load( 'objects/chessboard.obj', 'objects/chessboard.mtl', function ( object ) {
	    object.scale.x = 20;
	    object.scale.y = 20;
	    object.scale.z = 20;

		board = object;
	    game.add( board );
	} );

   	loader.load( 'objects/whitepawn.obj', 'objects/whitepawn.mtl', function ( object ) {
    	object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );

        wpawn = object;
        game.add( wpawn );

        wpawn.translateX( -77 );
        wpawn.translateZ( 22 );
    } );

    //wpawn = board.cloneObjMtl(wpawn);

    loader.load( 'objects/blackpawn.obj', 'objects/blackpawn.mtl', function ( object ) {
		object.scale.x = 3;
		object.scale.y = 3;
		object.scale.z = 3;
		object.translateY( 3 );

		bpawn = object;
		game.add( bpawn );

		bpawn.translateX( -77 );
		bpawn.translateZ( -50 );
	});

    loader.load( 'objects/whitebishop.obj', 'objects/whitebishop.mtl', function ( object ) {
    	object.scale.x = 3;
    	object.scale.y = 3;
    	object.scale.z = 3;
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
    	object.scale.x = 3;
    	object.scale.y = 3;
    	object.scale.z = 3;
    	object.translateY( 3 );
    	
    	wrook = object;
    	game.add( wrook );

    	wrook.translateX( 25 );
    	wrook.translateZ( 40 );
    } );

   loader.load( 'objects/whiteking.obj', 'objects/whiteking.mtl', function ( object ) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        object.translateY( 3 );
        
        wking = object;
        game.add( wking );

        wking.translateX( 5 );
        wking.translateZ( 0 );
    } );




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