namespace SpriteKind {
    export const pro2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 3 3 3 3 2 . . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . . . . . 2 2 2 3 3 3 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffff
        fffffffffffffffffffa5afffffffff9fffffffffffffffffffffffffffa5afffffffff9fffffffffffffffffffffffffffa5afffffffff9fffffffffffffffffffffffffffa5afffffffff9ffffffff
        ffffffffffffffff33a353a33fffff999fffffffffffffffffffffff33a353a33fffff999fffffffffffffffffffffff33a353a33fffff999fffffffffffffffffffffff33a353a33fffff999fffffff
        3fffffffffffffffa3555553affffff9ffffff3a3fffffffffffffffa3555553affffff9ffffff3a3fffffffffffffffa3555553affffff9ffffff3a3fffffffffffffffa3555553affffff9ffffff3a
        afffffff9ffffffffa55555affffffffffffffa5afffffff9ffffffffa55555affffffffffffffa5afffffff9ffffffffa55555affffffffffffffa5afffffff9ffffffffa55555affffffffffffffa5
        3a3ffff999ffffffffa555afffffffffffff3a353a3ffff999ffffffffa555afffffffffffff3a353a3ffff999ffffffffa555afffffffffffff3a353a3ffff999ffffffffa555afffffffffffff3a35
        55afffff9fffffffffa535afffffffffffffa55555afffff9fffffffffa535afffffffffffffa55555afffff9fffffffffa535afffffffffffffa55555afffff9fffffffffa535afffffffffffffa555
        5affffffffffffffff3a3a3ffffffffffffffa555affffffffffffffff3a3a3ffffffffffffffa555affffffffffffffff3a3a3ffffffffffffffa555affffffffffffffff3a3a3ffffffffffffffa55
        5afffffffffffffffffffffffffffffffffffa535afffffffffffffffffffffffffffffffffffa535afffffffffffffffffffffffffffffffffffa535afffffffffffffffffffffffffffffffffffa53
        a3ffffffffffffffffffffffaaaafffffffff3a3a3ffffffffffffffffffffffaaaafffffffff3a3a3ffffffffffffffffffffffaaaafffffffff3a3a3ffffffffffffffffffffffaaaafffffffff3a3
        ffffffffffaafffffffffffa355aafffffffffffffffffffffaafffffffffffa355aafffffffffffffffffffffaafffffffffffa355aafffffffffffffffffffffaafffffffffffa355aafffffffffff
        fffffffffa35afffff9ffffa5555aaffaaaaaffffffffffffa35afffff9ffffa5555aaffaaaaaffffffffffffa35afffff9ffffa5555aaffaaaaaffffffffffffa35afffff9ffffa5555aaffaaaaafff
        ffffffffa555affff999fffa55555aaa35555affffffffffa555affff999fffa55555aaa35555affffffffffa555affff999fffa55555aaa35555affffffffffa555affff999fffa55555aaa35555aff
        fffaaaaaa555afffff9ffffa5555533555555afffffaaaaaa555afffff9ffffa5555533555555afffffaaaaaa555afffff9ffffa5555533555555afffffaaaaaa555a3ffff9ffffa5555533555555aff
        ffa555533955affffffffffa3555555995555affffa555533955affffffffffa3555555995555affffa555533955affffffffffa3555555995555affffa555533955a3fffffffffa3555555995555aff
        ffa5555555553afffffffffaa55555599555aaffffa5555555553a3ffffffffaa55555599555aaffffa5555555553a3ffffffffaa55555599555aaffffa5555555553a3ffffffffaa55555599555aaff
        ffaa5555555553affffffffaa55555555553a3ffffaa5555555553affffffffaa55555555553afffffaa5555555553a3fffffffaa55555555553afffffaa5555555553affffffffaa55555555553afff
        fffaa5555555555affffffaa355555555553aaffff3aa5555555555affffffaa355555555553aafffffaa5555555555affffffaa355555555553aafffffaa5555555555affffffaa355555555553aaff
        fffaa55555555555affffaa55555555555553aafff3aa55555555555affffaa55555555555553aaffffaa55555555555affffaa55555555555553aaffffaa55555555555affffaa55555555555553aaf
        ffaa55555555555aaaffa35555555555555555a3f3aa55555555555aaaffa35555555555555555afffaa55555555555aaaffa35555555555555555afffaa55555555555aaaffa35555555555555555af
        ffa555555555553a3faa3555555555555555553399a555555555553a3faa3555555555555555553399a555555555553a3faa35555555555555555533ffa555555555553a3faa35555555555555555533
        ffa5555555553aaaff3a555555555555555553ff39a5555555553aaaff3a555555555555555553ff39a5555555553aaaff3a555555555555555553ff39a5555555553aaaff3a555555555555555553ff
        ffff55533555333ffffa355555555555555533ff333355533555333ffffa355555555555555533ff333355533555333ffffa355555555555555533ff333355533555333ffffa355555555555555533ff
        ffffaaaa355533355ffa333aaa35555555553ffff333aaaa355533355ffa333aaa35555555553ffff333aaaa355533355ffa333aaa35555555553ffff333aaaa355533355ffa333aaa35555555553fff
        fffffffaa55ffff55ff3aaaaaaa5555533333ffff3333ffaa55ffff55ff3aaaaaaa5555533333ffff3333ffaa55ffff55ff3aaaaaaa5555533333ffff3333ffaa55ffff55ff3aaaaaaa5555533333fff
        ffffffffaa5ffffffffffffafaa55555afffffffffffffffaa5ffffffffffffafaa55555afffffffffffffffaa5ffffffffffffafaa55555afffffffffffffffaa5ffffffffffffafaa55555afffffff
        fffffffffaaffffffffffffff3a55553affffffffffffffffaafffffffffffffffa55553affffffffffffffffaafffffffffffffffa55553affffffffffffffffaafffffffffffffffa55553afffffff
        fffffffffffffffffffffffff335555afffffffffffffffffffffffffffffffffff5555afffffffffffffffffffffffffffffffffff5555afffffffffffffffffffffffffffffffffff5555affffffff
        fffffffffffffffffffffffff3335533ffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffff55ffffffffff
        ffffffffffffffffffffffffff33333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff9fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 3))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -50
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.setLife(5)
})
sprites.onOverlap(SpriteKind.pro2, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.say("ow!", 1000)
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.say("ALERT THE BOSS!", 1000)
    otherSprite.destroy(effects.fire, 500)
    info.setScore(10)
})
let projectile: Sprite = null
let proj2: Sprite = null
let mySprite: Sprite = null
game.splash("HELP SAVE YOUR SISTER.... ", "USE A,B, AND THE ARROW KEYS")
mySprite = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    .........................fffff....................
    .......................ff99999ff..................
    ......................f888888999f.................
    .....................f88888889998f................
    .....................f88888888888f................
    ....................f8888888889998f...............
    ....................f8888888889998f...............
    ....................f8888ff8889998f...............
    ...................f9998fd1f888ffff...............
    ...................f929fd11ff8f1df................
    ...................f929fd11f1ff1df................
    ...................f929fd11f1df1df................
    ..................ff999fdd111ddddf................
    ................ff99f88fddffdddddf...ffffff.......
    ...............f99999ff8fdddfddddf..f88888ff......
    ..............ffff9999ff8fdddddddfff88888f99f.....
    .............f8888f9998ff8fdddddf99f8888f92f9f....
    .............f8888fff9988fffffff999f8888f92f9f....
    .............f888f888f9998889999999f8888f92f9f....
    .............f88ff8888f999999999999f8888f92f9f....
    .............fff8ff888f999999fffffff88888f99f.....
    ..............f8888888f99999f.......f88888ff......
    ..............f8888888f9999f.........ffffff.......
    ..............f888888ffffff.......................
    ...............ff888ff8888f.......................
    .................fff888888ff......................
    ................f99f88888f99f.....................
    ...............f9999f888f9999ff...................
    .............ff99999fffff999f88f..................
    ............f88f999f....ffff8888f.................
    ...........f8888f9f....ff8888888f.................
    ..........f888888f.....f88888888f.................
    .........f8888888f....f888888888f.................
    .......ff88888888f....f888888888f.................
    ......f88f8888888f...f888888888ff.................
    ....ff8888f88888f....f88888888ffff................
    ...f8888888f8888f...f88888888f8888f...............
    ..f8888888888888f...f8888888f888888f..............
    .f8888888888888f....f888888888888888f.............
    .fffffffffffffff....ffffffffffffffffff............
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ..................................................fffff.........
    ................................................ff22222f........
    ...................................ff....fff...f22222552f.......
    ..................................f4f...f444ffffff222255f.......
    ..................................f4f...ff4444f444ff22f44f......
    .................................f4f...f4ff444f48844ff444f......
    .................................f4f..f44f.f444f888844f444f.....
    ................................f4ffff44f...f4fff888884ff4f.....
    ................................f444f44fff..ff44ff8888844f......
    ...............................f4444444444ff4444f8f8888884f.....
    ...............................f4444444444444444488888ffff......
    ...............................f4444f44ff44444444484ff4444f.....
    ..............................f4444f144f.f4444f444f444f44ff.....
    .............................f4444ff14f...f44f1f44f444f44f......
    .............................f444444ff...f4ff4444f44444ff.......
    ..............................f444ff.....f44f144f444444f........
    ...............................fff........f44fff4f44444f........
    .........................................f4ff455f44444f.........
    .........................................ffffff4f44444f.........
    ...............................................fff444f..........
    ................................................f1414f..........
    .................................................ffff...........
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 3))
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 4))
mySprite2.vx = 20
mySprite2.setBounceOnWall(true)
info.setLife(3)
info.setScore(0)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc77cccccccccccccccccccccccccccccccccccccc77cccccccccccccccccccccccccccccccccccccc77cccccccccccccccccccccccccccccccccccccc77cccccccccccccccc
    ccccccccccccccccccccccc7ccccccccccccccccccccccccccccccccccccccc7ccccccccccccccccccccccccccccccccccccccc7ccccccccccccccccccccccccccccccccccccccc7cccccccccccccccc
    ccccccccccccccccccccc7777cccccccccccccccccccccccccccccccccccc7777cccccccccccccccccccccccccccccccccccc7777cccccccccccccccccccccccccccccccccccc7777ccccccccccccccc
    cccccccccccccccccccc77777ccccccccccccccccccccccccccccccccccc77777ccccccccccccccccccccccccccccccccccc77777ccccccccccccccccccccccccccccccccccc77777ccccccccccccccc
    ccccccccccccccccccc7777777ccccccccccccccccccccccccccccccccc7777777ccccccccccccccccccccccccccccccccc7777777ccccccccccccccccccccccccccccccccc7777777cccccccccccccc
    ccccccccccccccccccc77777c7ccccccccccccccccccccccccccccccccc77777c7ccccccccccccccccccccccccccccccccc77777c7ccccccccccccccccccccccccccccccccc77777c7cccccccccccccc
    ccccccccccccbccccccc7777ccccccccccccccccccccccccccccbccccccc7777ccccccccccccccccccccccccccccbccccccc7777ccccccccccccccccccccccccccccbccccccc7777cccccccccccccccc
    ccccccccccccbcccccc7777777ccccccccccccccccccccccccccbcccccc7777777ccccccccccccccccccccccccccbcccccc7777777ccccccccccccccccccccccccccbcccccc7777777cccccccccccccc
    ccccccccccccbccccc77777777ccccccccccccccccccccccccccbccccc77777777ccccccccccccccccccccccccccbccccc77777777ccccccccccccccccccccccccccbccccc77777777cccccccccccccc
    ccccccccccccbcccc77777777777ccccccccccccccccccccccccbcccc77777777777ccccccccccccccccccccccccbcccc77777777777ccccccccccccccccccccccccbcccc77777777777cccccccccccc
    cc77ccccccccbcc7c7777777777777ccccbccccccc77ccccccccbcc7c7777777777777ccccbccccccc77ccccccccbcc7c7777777777777ccccbccccccc77ccccccccbcc7c7777777777777ccccbccccc
    c77777ccccccbcc777777777777777ccccbcccccc77777ccccccbcc777777777777777ccccbcccccc77777ccccccbcc777777777777777ccccbcccccc77777ccccccbcc777777777777777ccccbccccc
    77777777ccccbccc77777777777777ccccbccccc77777777ccccbccc77777777777777ccccbccccc77777777ccccbccc77777777777777ccccbccccc77777777ccccbccc77777777777777ccccbccccc
    777777777ccccbcccc777777777777ccccbccccc777777777ccccbcccc777777777777ccccbccccc777777777ccccbcccc777777777777ccccbccccc777777777ccccbcccc777777777777ccccbccccc
    777777777cccccbcccc7777777bbbbbbcbbcccc3c77777777cccccbcccc7777777bbbbbbcbbcccc3c77777777cccccbcccc7777777bbbbbbcbbcccc3c77777777cccccbcccc7777777bbbbbbcbbcccc3
    7777777777cccccbb7777777bbbbbbbbbbcccc3cc777777777cccccbb7777777bbbbbbbbbbcccc3cc777777777cccccbb7777777bbbbbbbbbbcccc3cc777777777cccccbb7777777bbbbbbbbbbcccc3c
    77777777ccccccccbb77777777bb7bb3bbcccccc77777777ccccccccbb77777777bb7bb3bbcccccc77777777ccccccccbb77777777bb7bb3bbcccccc77777777ccccccccbb77777777bb7bb3bbcccccc
    777777777cccccc777b7777777b777bbb3ccccc7777777777cccccc777b7777777b777bbb3ccccc7777777777cccccc777b7777777b777bbb3ccccc7777777777cccccc777b7777777b777bbb3ccccc7
    7777b77cccccc77777777777777777bbcccccc777777b77cccccc77777777777777777bbcccccc777777b77cccccc77777777777777777bbcccccc777777b77cccccc77777777777777777bbcccccc77
    7777b7777ccccc777777777777777bbccccccc777777b7777ccccc777777777777777bbccccccc777777b7777ccccc777777777777777bbccccccc777777b7777ccccc777777777777777bbccccccc77
    7777b77b77cccccc7777bbbbb777777ccccccc777777b77b77cccccc7777bbbbb777777ccccccc777777b77b77cccccc7777bbbbb777777ccccccc777777b77b77cccccc7777bbbbb777777ccccccc77
    7777b77b77ccccc3bbbbbbbbbb777777777ccc777777b77b77ccccc3bbbbbbbbbb777777777ccc777777b77b77ccccc3bbbbbbbbbb777777777ccc777777b77b77ccccc3bbbbbbbbbb777777777ccc77
    7777b7b777ccccbbbbbbbbbbb7744477777ccc777777b7b777ccccbbbbbbbbbbb77bbb77777ccc777777b7b777ccccbbbbbbbbbbb77bbb77777ccc777777b7b777ccccbbbbbbbbbbb7744477777ccc77
    7777bbb7447c333bbbbbbbbbbbb3444777ccccc77777bbb7447c333bbbbbbbbbbbb3bbb777ccccc77777bbb7447c333bbbbbbbbbbbb3bbb777ccccc77777bbb7447c333bbbbbbbbbbbb3444777ccccc7
    7777bb744777bbbbbbbbbbbbbbbb344477cccc777777bb744777bbbbbbbbbbbbbbbb3bbb77cccc777777bb744777bbbbbbbbbbbbbbbb3bbb77cccc777777bb744777bbbbbbbbbbbbbbbb344477cccc77
    777bb77777bbbbbbbbbbbbbbbbbbb77777777777777bb77777bbbbbbbbbbbbbbbbbbb77777777777777bb77777bbbbbbbbbbbbbbbbbbb77777777777777bb77777bbbbbbbbbbbbbbbbbbb77777777777
    77bb7777bbbbbbbbbbbbbbbb7bb777777777b77777bb7777bbbbbbbbbbbbbbbb7bb777777777b77777bb7777bbbbbbbbbbbbbbbb7bb777777777b77777bb7777bbbbbbbbbbbbbbbb7bb777777777b777
    77b777747777bbb3bb7bb3bb7bb777447777b77777b777747777bbb3bb7bb3bb7bb777bb7777b77777b777747777bbb3bb7bb3bb7bb777447777b77777b777747777bbb3bb7bb3bb7bb777447777b777
    77b7b777777bbb7bb77bbb777bb777b44777b77777b7b777777bbb7bb77bbb777bb777bbb777b77777b7b777777bbb7bb77bbb777bb777b44777b77777b7b777777bbb7bb77bbb777bb777b44777b777
    7bb7b777777b777b77777b777bb777b77777b7777bb7b777777b777b77777b777bb777b77777b7777bb7b777777b777b77777b777bb777b77777b7777bb7b777777b777b77777b777bb777b77777b777
    7bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb777b777777b77
    7bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb777b777777b77
    7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb
    bb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777b
    7b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb77777777777
    7b777777777777777777b7777bbbb777bbb777777b777777777777777777b7777bbbb777bbb777777b777777777777777777b7777bbbb777bbb777777b777777777777777777b7777bbbb77744477777
    7bbbb774447777777777b7777bbb777bbb7777777bbbb774447777777777b7777bbb777bbb7777777bbbb774447777777777b7777bbb777bbb7777777bbbb77bbb7777777777b7777bbb777444777777
    bbbbbb77444777777777b7777bbb77bbb77bbbbbbbbbbb77444777777777b7777bbb77bbb77bbbbbbbbbbb77444777777777b7777bbb77bbb77bbbbbbbbbbb77bbb777777777b7777bbb7744477bbbbb
    bbbb7777b44477777777b7777bbb77777bbbbbbbbbbb7777b44477777777b7777bbb77777bbbbbbbbbbb7777b44477777777b7777bbb77777bbbbbbbbbbb7777bbbb77777777b7777bbb77777bbbbbbb
    bbbbbbb7b77777777b77b7777bbb7777bbbbbbbbbbbbbbb7b77777777b77b7777bbb7777bbbbbbbbbbbbbbb7b77777777b77b7777bbb7777bbbbbbbbbbbbbbb7b77777777b77b7777bbb7777bbbbbbbb
    bbbbbbbbbb7777777b77b7777bbbb7bbbb7bbbbbbbbbbbbbbb7777777b77b7777bbbb7bbbb7bbbbbbbbbbbbbbb7777777b77b7777bbbb7bbbb7bbbbbbbbbbbbbbb7777777b77b7777bbbb7bbbb7bbbbb
    bbbbb7bbbb7777777b77b7777bbbbbbbbb77bb7bbbbbbbbbbb7777777b77b7777bbbbbbbbb77bb7bbbbbb7bbbb7777777b77b7777bbbbbbbbb77bb7bbbbbb7bbbb7777777b77b7777bbbbbbbbb77bb7b
    7bbb777bb3bb77777b77b7777bbbbbbbb77bb7777bbbbbbbb3bb77777b77b7777bbbbbbbb77bb7777bbb777bb3bb77777b77b7777bbbbbbbb77bb7777bbb777bb3bb77777b77b7777bbbbbbbb77bb777
    77bb777bb3b777777bb7bb777bbbbbbbbb77777777bbbbbbb3b777777bb7bb777bbbb777bb77777777bb777bb3b777777bb7bb777bbbb777bb77777777bb777bb3b777777bb7bb777bbbb777bb777777
    77b7777bbbb7777777bbbb777bbbbbbbbb77777777bbbbbbbbb7777777bbbb777bbbb777bb77777777b7777bbbb7777777bbbb777bbbb777bb77777777b7777bbbb7777777bbbb777bbbb777bb777777
    77b7777bb7777777777bbb777bbbbbbbbb77777777bbbbbbb7777777777bbb777bbbb777bb77777777b7777bb7777777777bbb777bbbb777bb77777777b7777bb7777777777bbb777bbbb777bb777777
    77b7777bb77777777777bbb77bbbbbbbbb77777777bbbbbbb77777777777bbb77bbbb777bb77777777b7777bb77777777777bbb77bbbb777bb77777777b7777bb77777777777bbb77bbbb777bb777777
    777b777bb77777777777bbb77bbbbbbbbb777777777bbbbbb77777777777bbb77bbbb777bb777777777b777bb77777777777bbb77bbbb777bb777777777b777bb77777777777bbb77bbbb777bb777777
    777bb7bbb7777bb7bbb77bb77bbbbbbbbb77b777777bbbbbb7777bb7bbb77bb77bbbb777bb77b777777bb7bbb7777bb7bbb77bb77bbbb777bb77b777777bb7bbb7777bb7bbb77bb77bbbb777bb77b777
    777bbbbbb777bbbbbbbbbbbb7bbbbbbbbb77b777777bbbbbb777bbbbbbbbbbbb7bbbbb77bb77b777777bbbbbb777bbbbbbbbbbbb7bbbbb77bb77b777777bbbbbb777bbbbbbbbbbbb7bbbbb77bb77b777
    7777bbbbb77bbbbbbbbbbbbbbbbbbbbbb77bb7777777bbbbb77bbbbbbbbbbbbbbbbbbb7bb77bb7777777bbbbb77bbbbbbbbbbbbbbbbbbb7bb77bb7777777bbbbb77bbbbbbbbbbbbbbbbbbb7bb77bb777
    77777bbbb777bb3bbbbbbb7bbbbbbbbbb77b777777777bbbb777bb3bbbbbbb7bbbbbbb7bb77b777777777bbbb777bb3bbbbbbb7bbbbbbb7bb77b777777777bbbb777bb3bbbbbbb7bbbbbbb7bb77b7777
    77777bbb774477bbbbbb7b77bbbbbbbbb7b7777777777bbb774477bbbbbb7b77bbbbbb7bb7b7777777777bbb774477bbbbbb7b77bbbbbb7bb7b7777777777bbb774477bbbbbb7b77bbbbbb7bb7b77777
    77777bbb77777bb77bb77b77bbbbbbbbbb77777777777bbb77777bb77bb77b77bbbbbb7bbb77777777777bbb77777bb77bb77b77bbbbbb7bbb77777777777bbb77777bb77bb77b77bbbbbb7bbb777777
    77777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb77777777
    77777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb77777777
    77777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb77777777
    77777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb777777777
    77777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb7777777777
    77777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb7777777777
    77777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb7777777777
    7777bbb777b777777777cc777bbbbb7c777777777777bbb777b777777777cc777bbbbb7c777777777777bbb777b777777777cc777bbbbb7c777777777777bbb777b777777777cc777bbbbb7c77777777
    7777bbb777b7777777777cc7bbbbbb77cc7777c77777bbb777b7777777777cc7bbbbbb77cc7777c77777bbb777b7777777777cc7bbbbbb77cc7777c77777bbb777b7777777777cc7bbbbbb77cc7777c7
    7777bbb7bbb7777777777777bbbbbbb77c777cc77777bbb7bbb7777777777777bbbbbbb77c777cc77777bbb7bbb7777777777777bbbbbbb77c777cc77777bbb7bbb7777777777777bbbbbbb77c777cc7
    cc77bbbbbb77777777c77777bbbbbbb777777c77cc77bbbbbb77777777c77777bbbbbbb777777c77cc77bbbbbb77777777c77777bbbbbbb777777c77cc77bbbbbb77777777c77777bbbbbbb777777c77
    3cc7bbbbb77cc7777cc7777cbbbbbbbc777777777cc7bbbbb77cc7777cc7777cbbbbbbbc777777777cc7bbbbb77cc7777cc7777cbbbbbbbc777777777cc7bbbbb77cc7777cc7777cbbbbbbbc77777777
    3cccbbbbb777cc77cc77c7ccbbbbbbbc777c77777cccbbbbb777cc77cc77c7ccbbbbbbbc777c77777cccbbbbb777cc77cc77c7ccbbbbbbbc777c77777cccbbbbb777cc77cc77c7ccbbbbbbbc777c7777
    3cccbbb777777777c77cccccbbbbbbbcc7cc77c77cccbbb777777777c77cccccbbbbbbbcc7cc77c77cccbbb777777777c77cccccbbbbbbbcc7cc77c77cccbbb777777777c77cccccbbbbbbbcc7cc77c7
    ccccbbbc77777777777cccccbbbbbbbcccc77cccccccbbbc77777777777cccccbbbbbbbcccc77cccccccbbbc77777777777cccccbbbbbbbcccc77cccccccbbbc77777777777cccccbbbbbbbcccc77ccc
    ccccbbbc777c77ccc77cccccbbbbbbbcccccccccccccbbbc777c77ccc77cccccbbbbbbbcccccccccccccbbbc777c77ccc77cccccbbbbbbbcccccccccccccbbbc777c77ccc77cccccbbbbbbbccccccccc
    ccccbbbc77ccc7cccc7cccccbbbbbbbcccccccccccccbbbc77ccc7cccc7cccccbbbbbbbcccccccccccccbbbc77ccc7cccc7cccccbbbbbbbcccccccccccccbbbc77ccc7cccc7cccccbbbbbbbccccccccc
    ccccbbbcccccccccccccccccbbbbbbbcccccccccccccbbbcccccccccccccccccbbbbbbbcccccccccccccbbbcccccccccccccccccbbbbbbbcccccccccccccbbbcccccccccccccccccbbbbbbbccccccccc
    ccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbccccccccc
    ccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbcccccccccccccbbb3ccccccccccccccccbbbbbbbccccccccc
    ccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbccccccccc
    ccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbccccccccc
    ccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbcccccccccccccbbbbccccccccccccccccbbbbbbbccccccccc
    ccccbbbb3cccccccccccccccbbbbbbbcccccccccccccbbbb3cccccccccccccccbbbbbbbcccccccccccccbbbb3cccccccccccccccbbbbbbbcccccccccccccbbbb3cccccccccccccccbbbbbbbccccccccc
    ccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbccccccccc
    ccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbcccccccccccccbbbbbcccccccccccccccbbbbbbbccccccccc
    ccccbbbbb3ccccccccccccc3bbbbbbb3ccccccccccccbbbbb3ccccccccccccc3bbbbbbb3ccccccccccccbbbbb3ccccccccccccc3bbbbbbb3ccccccccccccbbbbb3ccccccccccccc3bbbbbbb3cccccccc
    ccccbbbbb3cccccccccccccbbbbbbbb3ccccccccccccbbbbb3cccccccccccccbbbbbbbb3ccccccccccccbbbbb3cccccccccccccbbbbbbbb3ccccccccccccbbbbb3cccccccccccccbbbbbbbb3cccccccc
    ccc3bbbbbbcccccccccccccbbbbbbbbbccccccccccc3bbbbbbcccccccccccccbbbbbbbbbccccccccccc3bbbbbbcccccccccccccbbbbbbbbbccccccccccc3bbbbbbcccccccccccccbbbbbbbbbcccccccc
    ccc3bbbbbbcccccccccccc3bbbbbbbbbccccccccccc3bbbbbbcccccccccccc3bbbbbbbbbccccccccccc3bbbbbbcccccccccccc3bbbbbbbbbccccccccccc3bbbbbbcccccccccccc3bbbbbbbbbcccccccc
    ff3bbbbbbb3cccccccccccbbbbbbbbffffffffffff3bbbbbbb3cccccccccccbbbbbbbbffffffffffff3bbbbbbb3cccccccccccbbbbbbbbffffffffffff3bbbbbbb3cccccccccccbbbbbbbbffffffffff
    ffffffffbbbccccccccc33bbbfffffffffffffffffffffffbbbccccccccc33bbbfffffffffffffffffffffffbbbccccccccc33bbbfffffffffffffffffffffffbbbccccccccc33bbbfffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setTilemap(tilemap`level1`)
proj2.setKind(SpriteKind.pro2)
game.onUpdateInterval(500, function () {
    proj2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, 0)
})
