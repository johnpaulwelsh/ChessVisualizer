var Board = function( loader ) {
	loader.load( 'objects/chessboard.obj', 'objects/chessboard.mtl', function ( object ) {
	    object.scale.x = 20;
	    object.scale.y = 20;
	    object.scale.z = 20;

	    loader.load( 'objects/whitepawn.obj', 'objects/whitepawn.mtl', function ( object ) {
	    	object.scale.x = 3;
	        object.scale.y = 3;
	        object.scale.z = 3;

	        object.translateY( 3 );

	        loader.load( 'objects/whiterook.obj', 'objects/whiterook.mtl', function ( object ) {
	        	object.scale.x = 3;
	        	object.scale.y = 3;
	        	object.scale.z = 3;

	        	object.translateY( 30 );

	        	loader.load( 'objects/blackpawn.obj', 'objects/blackpawn.mtl', function ( object ) {
	        		object.scale.x = 3;
	        		object.scale.y = 3;
	        		object.scale.z = 3;

	        		object.translateY( 3 );

	        		bpawn = object;
	        		game.add( bpawn );

	        		bpawn.translateX( -50 );
	        		bpawn.translateZ( 10 );
	        	});

	        	rook = object;
	        	game.add( rook );

	        	rook.translateX( 25 );
	        	rook.translateZ( 40 );
	        } );

	        pawn = object;
	        game.add( pawn );

            pawn.translateX( -77 );
            pawn.translateZ( 22 );
	    } );

		board = object;
	    game.add( board );
	} );
};

Board.prototype.movePiece = function( piece ) {
	// move piece
};

Board.prototype.run = function(  ) {
	// do stuff
};