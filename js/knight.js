var Knight = function (loader, pieces, color, side, obj, mtl) {
    self = this;
    self.init(loader, pieces, color, side, obj, mtl);
}

Knight.prototype.init = function (loader, pieces, color, side, obj, mtl) {
    if (color == 'white') {

        loader.load(obj, mtl, function (object) {
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

            if (side == 'left') {
                wknight.translateX(-59);
                wknight.translateZ(40);
            } else {
                wknight.translateX(10);
                wknight.translateZ(40);
            }
        });

    } else {

        loader.load(obj, mtl, function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 2;
                object.scale.y = 3;
                object.scale.z = 2;
            } else {
                object.scale.x = 3;
                object.scale.y = 5;
                object.scale.z = 3;
            }

            game.add(object);

            if (side == 'left') {
                object.translateX(10);
                object.translateZ(-65);
            } else {
                object.translateX(-59);
                object.translateZ(-65);
            }
        });
    }
}