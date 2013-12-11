// John Sullivan and John Paul Welsh

var w_r_bishop;

var W_R_Bishop = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_R_Bishop.prototype.init = function (loader, obj, mtl) {
    
    w_r_bishop = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        w_r_bishop.add(this_piece);

        object.translateX(0);
        object.translateZ(40);
        piece_board.add(w_r_bishop);
    });
}

W_R_Bishop.prototype.moveX = function (distance) {
    w_r_bishop.translateX(distance);
}

W_R_Bishop.prototype.moveY = function (distance) {
    w_r_bishop.translateY(distance);
}

W_R_Bishop.prototype.moveZ = function (distance) {
    w_r_bishop.translateZ(distance);
}