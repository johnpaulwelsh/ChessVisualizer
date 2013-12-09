var Knight = function () {
	// white knight
    loader.load(pcsobj[8], pcsmtl[8], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 2;
            object.scale.y = 3;
            object.scale.z = 2;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }

        wknight = object;
        game.add(wknight);

        wknight.translateX(-59);
        wknight.translateZ(40);
    });

    // black knight
    loader.load(pcsobj[9], pcsmtl[9], function (object) {
        if (pieces == 'monkey') {
            object.scale.x = 2;
            object.scale.y = 3;
            object.scale.z = 2;
        } else {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
        }

        wknight = object;
        game.add(wknight);

        wknight.translateX(-59);
        wknight.translateZ(-65);
    }); 
}