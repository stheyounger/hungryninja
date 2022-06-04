// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "noWalls":
            case "level4":return tiles.createTilemap(hex`1e000700000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000000000000020202020200000000000000000000000000020000000200000000000000030202020300000000000000000000000002020000000200000000000000000300030000000000000000000000000202020000000200000000000000000000000000000004020202010202020202020202020202020201010202020201020202020202`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile4], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e000700000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000000000000020202020200000000000000000000000000000000000000000000000000020202020200000000000000000000000000020000000200000000000000030202020300000000000000000000000002020000000200000000000000000300030000000000000000000000000202020000000200000000000000000000000000000005020202010202020202020202020202020201010202020201020202020202`, img`
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . 
. . . . . . . . . 2 . . . 2 . . . . . . . . 2 2 2 . . . . . 
. . . . . . . . 2 2 . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile4,myTiles.tile12], TileScale.Sixteen);
            case "winLevel":
            case "level5":return tiles.createTilemap(hex`0a00070001010401010101050101010200000000000003010100000000000000000101000000000000000001010000000000000000010100000000000000000101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile9,myTiles.tile7,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1e000700000000000000000003010400000000000000010101010101010101010101000000000000000003010000010101000000010101010101010101010101000000000001010003010100000001000101010101010101010101010101000000000101010003010101000001000000000000010106070100010101000000010101010000020000000101000000000000000200000200000101000001010101010000000000010101050101010000000000000000000008010101010101010101010101010101010101010101010105050101010101`, img`
. . . . . . . . . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . 2 . . 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 . . 2 2 . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 2 . . 2 2 2 . . 2 . . . . . . 2 2 . . 2 . 2 2 2 
. . . 2 2 2 2 . . . . . . 2 2 . . . . . . . . . . . . . 2 2 
. . 2 2 2 2 2 . . . . . 2 2 2 . 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile1,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1e000700000000000000000000010101010000000000000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000000000050101010101010100000000000000010101010101010101010000000005010606060606060600000000000001010106060606000000000000000501060606060606060600000700000101010106040404030000000000050106060606060606060603010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . . . . 2 2 . . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . . . 2 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,myTiles.tile1,myTiles.tile12,myTiles.tile4,myTiles.tile13,myTiles.tile15], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "ground":
            case "tile2":return tile2;
            case "blank":
            case "tile3":return tile3;
            case "retractSpike":
            case "tile6":return tile6;
            case "upSpikes":
            case "tile1":return tile1;
            case "downSpikes":
            case "tile5":return tile5;
            case "leftSpike":
            case "tile8":return tile8;
            case "rightAngleSpike":
            case "tile9":return tile9;
            case "leftAngleSpike":
            case "tile7":return tile7;
            case "ground0":
            case "tile10":return tile10;
            case "ground1":
            case "tile11":return tile11;
            case "asdf":
            case "tile4":return tile4;
            case "end":
            case "tile12":return tile12;
            case "sushi":
            case "tile13":return tile13;
            case "nunchuks":
            case "tile15":return tile15;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
