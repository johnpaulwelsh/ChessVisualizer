var Rook = function (loader, piecestheme, color, side, obj, mtl) {
    self = this;
    self.init(loader, piecestheme, color, side, obj, mtl);
}

Rook.prototype.init = function (loader, piecestheme, color, side, obj, mtl) {
    
    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            if (piecestheme == 'monkey') {
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
                object.translateX(-73);
                object.translateZ(40);
            } else {
                object.translateX(30);
                object.translateZ(40);
            }
        });

    } else {

        loader.load(obj, mtl, function (object) {
            if (piecestheme == 'monkey') {
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
                object.translateX(30);
                object.translateZ(-60);
            } else {
                object.translateX(-73);
                object.translateZ(-60);
            }
        });
    }
}