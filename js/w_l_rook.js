// John Sullivan and John Paul Welsh

var w_l_rook;

var W_L_Rook = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_L_Rook.prototype.init = function (loader, obj, mtl) {
    
    w_l_rook = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        w_l_rook.add(this_piece);

        object.translateX(-73);
        object.translateZ(40);
        piece_board.add(w_l_rook);
    });
}

W_L_Rook.prototype.moveX = function (distance) {
    w_l_rook.translateX(distance);
}

W_L_Rook.prototype.moveY = function (distance) {
    w_l_rook.translateY(distance);
}

W_L_Rook.prototype.moveZ = function (distance) {
    w_l_rook.translateZ(distance);
}