var Bishop = function (loader, pieces, color, side) {
    self = this;
    self.init(loader, pieces, color, side);
}

Bishop.prototype.init = function (loader, pieces, color, side) {
    if (color == 'white') {
        // white bishop
        loader.load(pcsobj[0], pcsmtl[0], function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4;
                object.scale.y = 6;
                object.scale.z = 4;
            } else {
                object.scale.x = 3;
                object.scale.y = 6;
                object.scale.z = 3;
            }
            
            wbishop = object;
            game.add(wbishop);

            if (pieces == 'monkey') {
                wbishop.translateX(-44);
                wbishop.translateZ(40);
            } else {
                wbishop.translateX(-47);
                wbishop.translateZ(40);
            }
        });
    } else {
        // black bishop
        loader.load(pcsobj[1], pcsmtl[1], function (object) {
            if (pieces == 'monkey') {
                object.scale.x = 4;
                object.scale.y = 6;
                object.scale.z = 4;
            } else {
                object.scale.x = 3;
                object.scale.y = 6;
                object.scale.z = 3;
            }
            
            bbishop = object;
            game.add(bbishop);

            bbishop.translateX(-46);
            bbishop.translateZ(-65);
        });
    }
}