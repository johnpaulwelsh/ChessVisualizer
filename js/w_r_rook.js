// John Sullivan and John Paul Welsh

var w_r_rook;

var W_R_Rook = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_R_Rook.prototype.init = function (loader, obj, mtl) {
    
    w_r_rook = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        w_r_rook.add(this_piece);

        object.translateX(30);
        object.translateZ(40);
        piece_board.add(w_r_rook);
    });
}

W_R_Rook.prototype.moveX = function (distance) {
    w_r_rook.translateX(distance);
}

W_R_Rook.prototype.moveY = function (distance) {
    w_r_rook.translateY(distance);
}

W_R_Rook.prototype.moveZ = function (distance) {
    w_r_rook.translateZ(distance);
}