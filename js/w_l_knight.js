// John Sullivan and John Paul Welsh

var w_l_knight;

var W_L_Knight = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_L_Knight.prototype.init = function (loader, obj, mtl) {
    
    w_l_knight = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 2;
        object.scale.y = 3;
        object.scale.z = 2;

        this_piece = object;
        w_l_knight.add(this_piece);

        object.translateX(-59);
        object.translateZ(40);
        piece_board.add(w_l_knight);
    });
}

W_L_Knight.prototype.moveX = function (distance) {
    w_l_knight.translateX(distance);
}

W_L_Knight.prototype.moveY = function (distance) {
    w_l_knight.translateY(distance);
}

W_L_Knight.prototype.moveZ = function (distance) {
    w_l_knight.translateZ(distance);
}