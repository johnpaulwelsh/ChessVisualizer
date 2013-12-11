// John Sullivan and John Paul Welsh

var w_l_bishop;

var W_L_Bishop = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_L_Bishop.prototype.init = function (loader, obj, mtl) {
    
    w_l_bishop = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        w_l_bishop.add(this_piece);

        object.translateX(-44);
        object.translateZ(40);
        piece_board.add(w_l_bishop);
    });
}

W_L_Bishop.prototype.moveX = function (distance) {
    w_l_bishop.translateX(distance);
}

W_L_Bishop.prototype.moveY = function (distance) {
    w_l_bishop.translateY(distance);
}

W_L_Bishop.prototype.moveZ = function (distance) {
    w_l_bishop.translateZ(distance);
}