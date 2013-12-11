// John Sullivan and John Paul Welsh

var w_queen;

var W_Queen = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

W_Queen.prototype.init = function (loader, obj, mtl) {
    
    w_queen = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        
        this_piece = object;
        w_queen.add(this_piece);

        object.translateX(-30);
        object.translateZ(40);
        piece_board.add(w_queen);
    });
}

W_Queen.prototype.moveX = function (distance) {
    w_queen.translateX(distance);
}

W_Queen.prototype.moveY = function (distance) {
    w_queen.translateY(distance);
}

W_Queen.prototype.moveZ = function (distance) {
    w_queen.translateZ(distance);
}