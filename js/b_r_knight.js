// John Sullivan and John Paul Welsh

var b_r_knight;

var B_R_Knight = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_R_Knight.prototype.init = function (loader, obj, mtl) {
    
    b_r_knight = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;

        this_piece = object;
        b_r_knight.add(this_piece);

        object.translateX(-59);
        object.translateZ(-60);
        piece_board.add(b_r_knight);
    });
}

B_R_Knight.prototype.moveX = function (distance) {
    b_r_knight.translateX(distance);
}

B_R_Knight.prototype.moveY = function (distance) {
    b_r_knight.translateY(distance);
}

B_R_Knight.prototype.moveZ = function (distance) {
    b_r_knight.translateZ(distance);
}