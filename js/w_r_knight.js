// John Sullivan and John Paul Welsh

var w_r_knight;

var W_R_Knight = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_R_Knight.prototype.init = function (loader, obj, mtl) {
    
    w_r_knight = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;

        this_piece = object;
        w_r_knight.add(this_piece);

        object.translateX(17);
        object.translateZ(40);
        piece_board.add(w_r_knight);
    });
}

W_R_Knight.prototype.moveX = function (distance) {
    w_r_knight.translateX(distance);
}

W_R_Knight.prototype.moveY = function (distance) {
    w_r_knight.translateY(distance);
}

W_R_Knight.prototype.moveZ = function (distance) {
    w_r_knight.translateZ(distance);
}