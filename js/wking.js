// John Sullivan and John Paul Welsh

var w_king;

var W_King = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_King.prototype.init = function (loader, obj, mtl) {
    
    w_king = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        
        this_piece = object;
        w_king.add(this_piece);

        object.translateX(-15);
        object.translateZ(40);
        piece_board.add(w_king);
    });
}

W_King.prototype.moveX = function (distance) {
    w_king.translateX(distance);
}

W_King.prototype.moveY = function (distance) {
    w_king.translateY(distance);
}

W_King.prototype.moveZ = function (distance) {
    w_king.translateZ(distance);
}