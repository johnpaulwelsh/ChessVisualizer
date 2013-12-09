var Rook = function (loader, pieces, color, side, obj, mtl) {
    self = this;
    self.init(loader, pieces, color, side, obj, mtl);
}

Rook.prototype.init = function (loader, pieces, color, side, obj, mtl) {
    if (color == 'white') {

        loader.load(obj, mtl, function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4.5;
                object.scale.y = 7;
                object.scale.z = 4.5;
            } else {
                object.scale.x = 3;
                object.scale.y = 5;
                object.scale.z = 3;
            }
            
            game.add(object);
            
            if (side == 'left') {
                object.translateX(-75);
                object.translateZ(39);
            } else {
                object.translateX(25);
                object.translateZ(39);
            }
        });

    } else {

        loader.load(obj, mtl, function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4.5;
                object.scale.y = 7;
                object.scale.z = 4.5;
            } else {
                object.scale.x = 3;
                object.scale.y = 5;
                object.scale.z = 3;
            }

            game.add(object);

            if (side == 'left') {
                object.translateX(25);
                object.translateZ(-65);
            } else {
                object.translateX(-75);
                object.translateZ(-65);
            }
        });
    }
}