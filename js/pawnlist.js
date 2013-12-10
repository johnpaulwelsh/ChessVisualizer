var w_plist = [];
var b_plist = [];

var PawnList = function (loader, color, obj, mtl) {
    self = this;
    return (self.init(loader, color, obj, mtl));
}


PawnList.prototype.init = function (loader, color, obj, mtl) {
    this.piece_w_pawn0;
    //this.piece_w_pawn1;
    this.pawnprefab;
    var x = this; 

    loader.load(obj, mtl, function (object) {
        object.scale.x = 3;
        object.scale.y = 3;
        object.scale.z = 3;
        x.pawnprefab = object;
        x.piece_w_pawn0 = object;

        piece_board.add(x.piece_w_pawn0);
        x.loadPawns(loader,color,obj,mtl);
    });
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
        piece_board.add(piece_w_pawn1);
        piece_w_pawn1.position.x = -62;
        piece_w_pawn1.position.z = 25;
        
        piece_w_pawn2 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn2);
        piece_w_pawn2.position.x = -46;
        piece_w_pawn2.position.z = 25;

        piece_w_pawn3 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn3);
        piece_w_pawn3.position.x = -31;
        piece_w_pawn3.position.z = 25;

        piece_w_pawn4 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn4);
        piece_w_pawn4.position.x = -15;
        piece_w_pawn4.position.z = 25;

        piece_w_pawn5 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn5);
        piece_w_pawn5.position.x = 0;
        piece_w_pawn5.position.z = 25;

        piece_w_pawn6 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn6);
        piece_w_pawn6.position.x = 16;
        piece_w_pawn6.position.z = 25;

        piece_w_pawn7 = cloneObjMtl(this.pawnprefab);
        piece_board.add(piece_w_pawn7);
        piece_w_pawn7.position.x = 31;
        piece_w_pawn7.position.z = 25;

        w_plist = [
            piece_w_pawn0, piece_w_pawn1, piece_w_pawn2, piece_w_pawn3,
            piece_w_pawn4, piece_w_pawn5, piece_w_pawn6, piece_w_pawn7
        ];

        return w_plist;

    } else {
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

        b_plist = [
            piece_b_pawn0, piece_b_pawn1, piece_b_pawn2, piece_b_pawn3,
            piece_b_pawn4, piece_b_pawn5, piece_b_pawn6, piece_b_pawn7
        ];

        return b_plist;
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