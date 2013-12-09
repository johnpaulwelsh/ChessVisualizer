var King = function () {
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
}