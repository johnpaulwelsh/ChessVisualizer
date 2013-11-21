var Pawn = function( loader ) {
	this.init( loader );
}

Pawn.prototype.init = function( loader ) {
    loader.load ( 'objects/whitepawn.obj', 'objects/whitepawn.mtl', function ( object ) {
        object.scale.x = 4;
        object.scale.y = 4;
        object.scale.z = 4;

        object.translateY( 3 );

        pawn = object;
        game.add( pawn );
    } );
}