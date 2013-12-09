var King = function (loader, pieces, color, obj, mtl) {
	
    self = this;
    self.init(loader, pieces, color, obj, mtl);
}

King.prototype.init = function (loader, pieces, color, obj, mtl) {
    if (color == 'white') {
        // white king
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 6;
            object.scale.z = 3;
            
            game.add(object);

            object.translateX(-34);
            object.translateZ(40);
        });
    } else {
        // black king
        loader.load(obj, mtl, function (object) {
            object.scale.x = 3;
            object.scale.y = 6;
            object.scale.z = 3;
            
            game.add(object);

            object.translateX( -33 );
            object.translateZ( -65 );
        } );
    }
}