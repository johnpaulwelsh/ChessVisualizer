var Pawn = function () {
	// white pawn
    loader.load(pcsobj[10], pcsmtl[10], function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        wpawns[0] = object;
        game.add(wpawns[0]);

        wpawns[0].translateX(-77);
        wpawns[0].translateZ(22);
    });

    // black pawn
    loader.load(pcsobj[11], pcsmtl[11], function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        bpawns[0] = object;
        game.add(bpawns[0]);

        bpawns[0].translateX(-77);
        bpawns[0].translateZ(-50);
    });
}