// John Sullivan and John Paul Welsh

var piece_b_pawn2;

var B_Pawn2 = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_Pawn2.prototype.init = function (loader, obj, mtl) {

    piece_b_pawn2 = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        black_pawn = object;
        piece_b_pawn2.add(black_pawn);

        object.translateX(2);
        object.translateZ(-47);
        piece_board.add(piece_b_pawn2);
    });
}

B_Pawn2.prototype.moveX = function (distance) {
    piece_b_pawn2.translateX(distance);
}

B_Pawn2.prototype.moveY = function (distance) {
    piece_b_pawn2.translateY(distance);
}

B_Pawn2.prototype.moveZ = function (distance) {
    piece_b_pawn2.translateZ(distance);
}