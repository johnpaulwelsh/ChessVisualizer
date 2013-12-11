// John Sullivan and John Paul Welsh

var b_king;

var B_King = function (loader, obj, mtl) {
    self = this;
    self.init(loader, obj, mtl);
}

B_King.prototype.init = function (loader, obj, mtl) {
    
    b_king = new THREE.Object3D();

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 6;
        object.scale.z = 3;
        
        this_piece = object;
        b_king.add(this_piece);

        object.translateX(-15);
        object.translateZ(-60);
        piece_board.add(b_king);
    });
}

B_King.prototype.moveX = function (distance) {
    b_king.translateX(distance);
}

B_King.prototype.moveY = function (distance) {
    b_king.translateY(distance);
}

B_King.prototype.moveZ = function (distance) {
    b_king.translateZ(distance);
}