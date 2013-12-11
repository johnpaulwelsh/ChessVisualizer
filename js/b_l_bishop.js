// John Sullivan and John Paul Welsh

var b_l_bishop;

var B_L_Bishop = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_L_Bishop.prototype.init = function (loader, obj, mtl) {
    
    b_l_bishop = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;

        this_piece = object;
        b_l_bishop.add(this_piece);

        object.translateX(0);
        object.translateZ(-60);
        piece_board.add(b_l_bishop);
    });
}

B_L_Bishop.prototype.moveX = function (distance) {
    b_l_bishop.translateX(distance);
}

B_L_Bishop.prototype.moveY = function (distance) {
    b_l_bishop.translateY(distance);
}

B_L_Bishop.prototype.moveZ = function (distance) {
    b_l_bishop.translateZ(distance);
}