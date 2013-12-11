// John Sullivan and John Paul Welsh

var piece_w_pawn5;

var W_Pawn5 = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_Pawn5.prototype.init = function (loader, obj, mtl) {

    piece_w_pawn5 = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;

        this_piece = object;
        piece_w_pawn5.add(this_piece);

        object.translateX(0);
        object.translateZ(25);
        piece_board.add(piece_w_pawn5);
    });
}

W_Pawn5.prototype.moveX = function (distance) {
    piece_w_pawn5.translateX(distance);
}

W_Pawn5.prototype.moveY = function (distance) {
    piece_w_pawn5.translateY(distance);
}

W_Pawn5.prototype.moveZ = function (distance) {
    piece_w_pawn5.translateZ(distance);
}