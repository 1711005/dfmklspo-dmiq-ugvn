music.setVolume(255)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 50) {
        music.playMelody("C G E B G A F B ", 120)
        music.playMelody("E C5 F C A A D B ", 120)
        basic.showString("a")
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.showString("b")
    }
})
