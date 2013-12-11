// John Sullivan and John Paul Welsh

var piece_b_pawn0;

var B_Pawn0 = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_Pawn0.prototype.init = function (loader, obj, mtl) {

    piece_b_pawn0 = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        black_pawn = object;
        piece_b_pawn0.add(black_pawn);

        object.translateX(31);
        object.translateZ(-47);
        piece_board.add(piece_b_pawn0);
    });
}

B_Pawn0.prototype.moveX = function (distance) {
    piece_b_pawn0.translateX(distance);
}

B_Pawn0.prototype.moveY = function (distance) {
    piece_b_pawn0.translateY(distance);
}

B_Pawn0.prototype.moveZ = function (distance) {
    piece_b_pawn0.translateZ(distance);
}