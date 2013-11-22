var Board = function( loader ) {
	loader.load( 'objects/chessboard.obj', 'objects/chessboard.mtl', function ( object ) {
	    object.scale.x = 20;
	    object.scale.y = 20;
	    object.scale.z = 20;

	    loader.load( 'objects/whitepawn.obj', 'objects/whitepawn.mtl', function ( object ) {
	    	object.scale.x = 4;
	        object.scale.y = 4;
	        object.scale.z = 4;

	        object.translateY( 3 );

	        pawn = object;
	        game.add( pawn );
	    } );

		board = object;
	    game.add( board );
	} );
}