var Board = function( loader ) {
	this.init( loader );
}

Board.prototype.init = function( loader ) {
    loader.load( 'objects/chessboardwhitenomarblejoin.obj', 'objects/chessboardwhitenomarblejoin.mtl', function ( object ) {
        object.scale.x = 20;
        object.scale.y = 20;
        object.scale.z = 20;

		board = object;
        game.add( board );
	} );
}