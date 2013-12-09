var Pawn = function (loader, pieces, color, position, obj, mtl) {
    self = this;
    self.init(loader, pieces, color, position, obj, mtl);
}

Pawn.prototype.init = function (loader, pieces, color, position, obj, mtl) {
	
    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 3;
            object.scale.z = 3;

            game.add(object);

            switch (position) {
                case 0:
                    object.translateX(-77);
                    object.translateZ(22);
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        });

    } else {

        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 3;
            object.scale.z = 3;

            game.add(object);

            switch (position) {
                case 0:
                    object.translateX(-77);
                    object.translateZ(-50);
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        });
    }
}