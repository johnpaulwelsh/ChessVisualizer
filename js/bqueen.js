// John Sullivan and John Paul Welsh

var b_queen;

var B_Queen = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_Queen.prototype.init = function (loader, obj, mtl) {
    
    b_queen = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 5;
        object.scale.z = 3;
        
        this_piece = object;
        b_queen.add(this_piece);

        object.translateX(-30);
        object.translateZ(-60);
        piece_board.add(b_queen);
    });
}

B_Queen.prototype.moveX = function (distance) {
    b_queen.translateX(distance);
}

B_Queen.prototype.moveY = function (distance) {
    b_queen.translateY(distance);
}

B_Queen.prototype.moveZ = function (distance) {
    b_queen.translateZ(distance);
}