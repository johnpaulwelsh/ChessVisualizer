// John Sullivan and John Paul Welsh

var b_l_knight;

var B_L_Knight = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_L_Knight.prototype.init = function (loader, obj, mtl) {
    
    b_l_knight = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;

        this_piece = object;
        b_l_knight.add(this_piece);

        object.translateX(17);
        object.translateZ(-60);
        piece_board.add(b_l_knight);
    });
}

B_L_Knight.prototype.moveX = function (distance) {
    b_l_knight.translateX(distance);
}

B_L_Knight.prototype.moveY = function (distance) {
    b_l_knight.translateY(distance);
}

B_L_Knight.prototype.moveZ = function (distance) {
    b_l_knight.translateZ(distance);
}