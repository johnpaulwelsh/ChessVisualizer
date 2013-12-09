var Rook = function () {
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
}