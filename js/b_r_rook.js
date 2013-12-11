// John Sullivan and John Paul Welsh

var b_r_rook;

var B_R_Rook = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_R_Rook.prototype.init = function (loader, obj, mtl) {
    
    b_r_rook = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        b_r_rook.add(this_piece);

        object.translateX(-73);
        object.translateZ(-60);
        piece_board.add(b_r_rook);
    });
}

B_R_Rook.prototype.moveX = function (distance) {
    b_r_rook.translateX(distance);
}

B_R_Rook.prototype.moveY = function (distance) {
    b_r_rook.translateY(distance);
}

B_R_Rook.prototype.moveZ = function (distance) {
    b_r_rook.translateZ(distance);
}