var Queen = function (loader, pieces, color, obj, mtl) {    
    self = this;
    self.init(loader, pieces, color, obj, mtl);
}

Queen.prototype.init = function (loader, pieces, color, obj, mtl) {
    if (color == 'white') {
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
            
            game.add(object);

            object.translateX(-28);
            object.translateZ(40);
        });
    } else {
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 5;
            object.scale.z = 3;
            
            game.add(object);

            object.translateX(-28);
            object.translateZ(-60);
        });
    }
}