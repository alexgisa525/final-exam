// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001500000000000007000000000000000000000000000000000000000000000000030609000000070707000000000000000000000000000000000000000000000008110500000707070707000000000000001414000000000212130000000000000811050007070707070707000000000015141400000000010104040404040401011105070d0a0e0f0b100c070606060606060600000000`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . 2 . 2 . . . . . . . . . . . . . . 
. . . . . . . . . 2 . 2 . . 2 . . . 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . 2 . 2 . 2 . . . . . 2 . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths0,sprites.builtin.coral1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast0,sprites.builtin.crowd1,sprites.builtin.crowd4,sprites.builtin.crowd6,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd5,sprites.builtin.brick,sprites.builtin.coral2,sprites.builtin.coral5,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
