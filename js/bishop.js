var Bishop = function (loader, pieces, color, side, obj, mtl) {
    self = this;
    self.init(loader, pieces, color, side, obj, mtl);
}

Bishop.prototype.init = function (loader, pieces, color, side, obj, mtl) {
    
    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4;
                object.scale.y = 6;
                object.scale.z = 4;
            } else {
                object.scale.x = 3;
                object.scale.y = 6;
                object.scale.z = 3;
            }
            
            game.add(object);

            if (side == 'left') {
                if (pieces == 'monkey') {
                    object.translateX(-44);
                    object.translateZ(40);
                } else {
                    object.translateX(-47);
                    object.translateZ(40);
                }
            } else {
                if (pieces == 'monkey') {
                    object.translateX(-5);
                    object.translateZ(40);
                } else {
                    object.translateX(-5); // may need to change
                    object.translateZ(40);
                }
            }
        });

    } else {
        
        loader.load(obj, mtl, function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4;
                object.scale.y = 6;
                object.scale.z = 4;
            } else {
                object.scale.x = 3;
                object.scale.y = 6;
                object.scale.z = 3;
            }
            
            game.add(object);

            if (side == 'left') {
                object.translateX(-46);
                object.translateZ(-65);
            } else {
                object.translateX(-5);
                object.translateZ(-65);
            }
        });
    }
}