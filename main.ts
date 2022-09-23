input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showString("funni firework")
})
input.onButtonPressed(Button.AB, function () {
    among_us = randint(1, 3)
    if (among_us == 1) {
        basic.showString("crew mate")
    } else if (among_us == 2) {
        basic.showString("impostor")
    } else {
        basic.showString("vote out")
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G B G B F A C ", 1100)
    edfyg = input.lightLevel()
    if (edfyg < 150) {
        basic.showNumber(150)
        basic.showString("150 swefjhk")
    } else {
        basic.showString("yes.")
        basic.showString("this time is no :[")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
let edfyg = 0
let among_us = 0
basic.showString("hello i am random bot i fahsejdk also hjkfed and fghjaeshjkgafed ghkszdxfc ")
