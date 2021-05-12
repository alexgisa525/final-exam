// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000800000000000000000000000000000000000000000000000003070a000000080808000000000000000000000000000000000000000000000009120500000808080808000000000000000000000000000213140000000000000912050008080808080808000000000000001500000000010104040404040401011205080e0b0f100c110d080707070707070700000000`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . 2 . 2 . . . . . . . . . . . . . . 
. . . . . . . . . 2 . 2 . . 2 . . . 2 . . . . . . . . . . . . . 
. . . . . . . . . 2 . 2 . 2 . . . . . 2 . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . 2 2 2 2 2 2 2 2 . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths0,sprites.builtin.coral1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast0,sprites.builtin.crowd1,sprites.builtin.crowd4,sprites.builtin.crowd6,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd5,sprites.builtin.brick,sprites.builtin.coral2,sprites.builtin.coral5,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
