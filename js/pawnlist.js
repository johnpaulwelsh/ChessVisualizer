// John Sullivan and John Paul Welsh

var pl;

var wp0 = new THREE.Object3D();
var wp1 = new THREE.Object3D();
var wp2 = new THREE.Object3D();
var wp3 = new THREE.Object3D();
var wp4 = new THREE.Object3D();
var wp5 = new THREE.Object3D();
var wp6 = new THREE.Object3D();
var wp7 = new THREE.Object3D();
var bp0 = new THREE.Object3D();
var bp1 = new THREE.Object3D();
var bp2 = new THREE.Object3D();
var bp3 = new THREE.Object3D();
var bp4 = new THREE.Object3D();
var bp5 = new THREE.Object3D();
var bp6 = new THREE.Object3D();
var bp7 = new THREE.Object3D();

var PawnList = function (loader, color, obj, mtl) {
    self = this;
    pl = self.init(loader, color, obj, mtl);
    //console.log(this.pl); // undefined
    return pl;
}

// Loads in the first piece and calls a function to load in the rest
PawnList.prototype.init = function (loader, color, obj, mtl) {
    this.piece_w_pawn0;
    this.pawnprefab;
    this.pl;
    this.w_plist;
    this.b_plist;
    var x = this;

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        x.pawnprefab = object;
        x.piece_w_pawn0 = object;

        wp0.add(x.piece_w_pawn0);
        piece_board.add(wp0);

        // Calls loadPawns to load the rest of the pieces
        x.loadPawns(loader, color, obj, mtl);
 
    }.bind(x));

/*
    x.interval = setInterval(function() {
        if (x.pl) {
            console.log(x.pl);
            clearInterval(x.interval);
        }
    }.bind(x),500);
*/
    
}

PawnList.prototype.loadPawns = function(loader,color,obj,mtl) {
    function cloneObjMtl (objmtl) {
        var i, cpy = new THREE.Object3D();
        
        for (var i in objmtl.children) {
            cpy.add(
                new THREE.Mesh(objmtl.children[i].children[i].geometry,
                objmtl.children[i].children[i].material)

            );
            cpy.scale.x = 3;
            cpy.scale.z = 3;
            cpy.scale.y = 3;
        }
        return cpy;
    }

    if (color == 'white') {
        this.piece_w_pawn0.position.x = -77;
        this.piece_w_pawn0.position.z = 25;

        piece_w_pawn1 = cloneObjMtl(this.pawnprefab);
        wp1.add(piece_w_pawn1);
        piece_board.add(wp1);
        piece_w_pawn1.position.x = -62;
        piece_w_pawn1.position.z = 25;
        
        piece_w_pawn2 = cloneObjMtl(this.pawnprefab);
        wp2.add(piece_w_pawn2);
        piece_board.add(wp2);
        piece_w_pawn2.position.x = -46;
        piece_w_pawn2.position.z = 25;

        piece_w_pawn3 = cloneObjMtl(this.pawnprefab);
        wp3.add(piece_w_pawn3);
        piece_board.add(wp3);
        piece_w_pawn3.position.x = -31;
        piece_w_pawn3.position.z = 25;

        piece_w_pawn4 = cloneObjMtl(this.pawnprefab);
        wp4.add(piece_w_pawn4);
        piece_board.add(wp4);
        piece_w_pawn4.position.x = -15;
        piece_w_pawn4.position.z = 25;

        piece_w_pawn5 = cloneObjMtl(this.pawnprefab);
        wp5.add(piece_w_pawn5);
        piece_board.add(wp5);
        piece_w_pawn5.position.x = 0;
        piece_w_pawn5.position.z = 25;

        piece_w_pawn6 = cloneObjMtl(this.pawnprefab);
        wp6.add(piece_w_pawn6);
        piece_board.add(wp6);
        piece_w_pawn6.position.x = 16;
        piece_w_pawn6.position.z = 25;

        piece_w_pawn7 = cloneObjMtl(this.pawnprefab);
        wp7.add(piece_w_pawn7);
        piece_board.add(wp7);
        piece_w_pawn7.position.x = 31;
        piece_w_pawn7.position.z = 25;

/*
        w_plist = [
            this.piece_w_pawn0, piece_w_pawn1, piece_w_pawn2, piece_w_pawn3,
            piece_w_pawn4, piece_w_pawn5, piece_w_pawn6, piece_w_pawn7
        ];
*/

        this.w_plist = [
            wp0, wp1, wp2, wp3, wp4, wp5, wp6, wp7,
            bp0, bp1, bp2, bp3, bp4, bp5, bp6, bp7
        ];
       

    } else {
        // yeah i know it says w, but thats how it got loaded so yeah
        this.piece_w_pawn0.position.x = 31;
        this.piece_w_pawn0.position.z = -47;

        piece_b_pawn1 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn1);
        piece_b_pawn1.position.x = 16;
        piece_b_pawn1.position.z = -47;

        piece_b_pawn2 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn2);
        piece_b_pawn2.position.x = 0;
        piece_b_pawn2.position.z = -47;

        piece_b_pawn3 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn3);
        piece_b_pawn3.position.x = -15;
        piece_b_pawn3.position.z = -47;

        piece_b_pawn4 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn4);
        piece_b_pawn4.position.x = -31;
        piece_b_pawn4.position.z = -47;

        piece_b_pawn5 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn5);
        piece_b_pawn5.position.x = -46;
        piece_b_pawn5.position.z = -47;

        piece_b_pawn6 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn6);
        piece_b_pawn6.position.x = -62;
        piece_b_pawn6.position.z = -47;

        piece_b_pawn7 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_b_pawn7);
        piece_b_pawn7.position.x = -77;
        piece_b_pawn7.position.z = -47;

        this.b_plist = [
            this.piece_w_pawn0, piece_b_pawn1, piece_b_pawn2, piece_b_pawn3,
            piece_b_pawn4, piece_b_pawn5, piece_b_pawn6, piece_b_pawn7
        ];

       
    }

}

/*
PawnList.prototype.moveX = function (color, position, distance) {
    if (color == 'white') {
        w_plist[position].translateX(distance);
    } else {
        b_plist[position].translateX(distance);
    }
}

PawnList.prototype.moveY = function (color, position, distance) {
    if (color == 'white') {
        w_plist[position].translateY(distance);
    } else {
        b_plist[position].translateY(distance);
    }
}

PawnList.prototype.moveZ = function (color, position, distance) {
    if (color == 'white') {
        w_plist[position].position.z = distance;
    } else {
        b_plist[position].position.z = distance;
    }
}
*/