var Queen = function () {
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
}