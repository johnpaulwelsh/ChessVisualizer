// John Sullivan and John Paul Welsh

var piece_b_pawn1;

var B_Pawn1 = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_Pawn1.prototype.init = function (loader, obj, mtl) {

    piece_b_pawn1 = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        this_piece = object;
        piece_b_pawn1.add(this_piece);

        object.translateX(16);
        object.translateZ(-47);
        piece_board.add(piece_b_pawn1);
    });
}

B_Pawn1.prototype.moveX = function (distance) {
    piece_b_pawn1.translateX(distance);
}

B_Pawn1.prototype.moveY = function (distance) {
    piece_b_pawn1.translateY(distance);
}

B_Pawn1.prototype.moveZ = function (distance) {
    piece_b_pawn1.translateZ(distance);
}