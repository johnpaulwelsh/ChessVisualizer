// John Sullivan and John Paul Welsh

var b_r_bishop;

var B_R_Bishop = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_R_Bishop.prototype.init = function (loader, obj, mtl) {
    
    b_r_bishop = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;

        this_piece = object;
        b_r_bishop.add(this_piece);

        object.translateX(-44);
        object.translateZ(-60);
        piece_board.add(b_r_bishop);
    });
}

B_R_Bishop.prototype.moveX = function (distance) {
    b_r_bishop.translateX(distance);
}

B_R_Bishop.prototype.moveY = function (distance) {
    b_r_bishop.translateY(distance);
}

B_R_Bishop.prototype.moveZ = function (distance) {
    b_r_bishop.translateZ(distance);
}