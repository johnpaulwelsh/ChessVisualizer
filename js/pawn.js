var piece_pawn;

var Pawn = function (loader, piecestheme, color, position, obj, mtl) {
    self = this;
    self.init(loader, piecestheme, color, position, obj, mtl);
}

Pawn.prototype.init = function (loader, piecestheme, color, position, obj, mtl) {

    piece_pawn = new THREE.Object3D();

    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 3;
            object.scale.z = 3;

            this_piece = object;
            piece_pawn.add(this_piece);

            switch (position) {
                case 0:
                    object.translateX(-77);
                    object.translateZ(25);
                    break;
                case 1:
                    object.translateX(-62);
                    object.translateZ(25);
                    break;
                case 2:
                    object.translateX(-46);
                    object.translateZ(25);
                    break;
                case 3:
                    object.translateX(-31);
                    object.translateZ(25);
                    break;
                case 4:
                    object.translateX(-15);
                    object.translateZ(25);
                    break;
                case 5:
                    object.translateX(0);
                    object.translateZ(25);
                    break;
                case 6:
                    object.translateX(16);
                    object.translateZ(25);
                    break;
                case 7:
                    object.translateX(31);
                    object.translateZ(25);
                    break;
                default:
                    break;
            }
            piece_board.add(piece_pawn);
        });

    } else {

        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 3;
            object.scale.z = 3;

            black_pawn = object;
            piece_pawn.add(black_pawn);

            switch (position) {
                case 0:
                    object.translateX(31);
                    object.translateZ(-47);
                    break;
                case 1:
                    object.translateX(16);
                    object.translateZ(-47);
                    break;
                case 2:
                    object.translateX(0);
                    object.translateZ(-47);
                    break;
                case 3:
                    object.translateX(-15);
                    object.translateZ(-47);
                    break;
                case 4:
                    object.translateX(-31);
                    object.translateZ(-47);
                    break;
                case 5:
                    object.translateX(-46);
                    object.translateZ(-47);
                    break;
                case 6:
                    object.translateX(-62);
                    object.translateZ(-47);
                    break;
                case 7:
                    object.translateX(-77);
                    object.translateZ(-47);
                    break;
                default:
                    break;
            }
        });
    }
    piece_board.add(piece_pawn);
}

Pawn.prototype.moveY = function (distance) {
    piece_pawn.translateY(distance);
}