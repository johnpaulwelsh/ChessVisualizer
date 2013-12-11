// John Sullivan and John Paul Welsh

var b_l_rook;

var B_L_Rook = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_L_Rook.prototype.init = function (loader, obj, mtl) {
    
    b_l_rook = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        b_l_rook.add(this_piece);

        object.translateX(30);
        object.translateZ(-60);
        piece_board.add(b_l_rook);
    });
}

B_L_Rook.prototype.moveX = function (distance) {
    b_l_rook.translateX(distance);
}

B_L_Rook.prototype.moveY = function (distance) {
    b_l_rook.translateY(distance);
}

B_L_Rook.prototype.moveZ = function (distance) {
    b_l_rook.translateZ(distance);
}