// John Sullivan and John Paul Welsh

var Knight = function (loader, piecestheme, color, side, obj, mtl) {
    self = this;
    self.init(loader, piecestheme, color, side, obj, mtl);
}

Knight.prototype.init = function (loader, piecestheme, color, side, obj, mtl) {
    
    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            if (piecestheme == 'monkey') {
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
                object.translateX(-59);
                object.translateZ(40);
            } else {
                object.translateX(17);
                object.translateZ(40);
            }
        });

    } else {

        loader.load(obj, mtl, function (object) {
            if (piecestheme == 'monkey') {
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
                object.translateX(17);
                object.translateZ(-60);
            } else {
                object.translateX(-59);
                object.translateZ(-60);
            }
        });
    }
}