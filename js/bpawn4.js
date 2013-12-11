// John Sullivan and John Paul Welsh

var piece_b_pawn4;

var B_Pawn4 = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_Pawn4.prototype.init = function (loader, obj, mtl) {

    piece_b_pawn4 = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        black_pawn = object;
        piece_b_pawn4.add(black_pawn);

        object.translateX(-31);
        object.translateZ(-47);
        piece_board.add(piece_b_pawn4);
    });
}

B_Pawn4.prototype.moveX = function (distance) {
    piece_b_pawn4.translateX(distance);
}

B_Pawn4.prototype.moveY = function (distance) {
    piece_b_pawn4.translateY(distance);
}

B_Pawn4.prototype.moveZ = function (distance) {
    piece_b_pawn4.translateZ(distance);
}