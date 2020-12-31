input.onButtonPressed(Button.A, function () {
	
})
let tm = TM1637.create(
DigitalPin.P15,
DigitalPin.P16,
7,
4
)
tm.on()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 990 && pins.analogReadPin(AnalogPin.P0) > 982) {
        basic.showIcon(IconNames.Duck)
    } else if (pins.analogReadPin(AnalogPin.P0) > 979 && pins.analogReadPin(AnalogPin.P0) <= 985) {
        basic.showIcon(IconNames.TShirt)
    } else if (pins.analogReadPin(AnalogPin.P0) > 974 && pins.analogReadPin(AnalogPin.P0) <= 981) {
        basic.showIcon(IconNames.Ghost)
    } else if (pins.analogReadPin(AnalogPin.P0) > 963 && pins.analogReadPin(AnalogPin.P0) <= 970) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (pins.analogReadPin(AnalogPin.P0) > 955 && pins.analogReadPin(AnalogPin.P0) <= 960) {
        basic.showIcon(IconNames.Snake)
    } else if (pins.analogReadPin(AnalogPin.P0) > 944 && pins.analogReadPin(AnalogPin.P0) <= 950) {
        basic.showIcon(IconNames.QuarterNote)
    } else if (pins.analogReadPin(AnalogPin.P0) > 933 && pins.analogReadPin(AnalogPin.P0) <= 940) {
        basic.showIcon(IconNames.Heart)
    } else if (pins.analogReadPin(AnalogPin.P0) > 915 && pins.analogReadPin(AnalogPin.P0) <= 930) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.analogReadPin(AnalogPin.P0) > 890 && pins.analogReadPin(AnalogPin.P0) <= 900) {
        basic.showIcon(IconNames.Yes)
    } else if (pins.analogReadPin(AnalogPin.P0) > 850 && pins.analogReadPin(AnalogPin.P0) <= 860) {
        basic.showIcon(IconNames.StickFigure)
    } else if (pins.analogReadPin(AnalogPin.P0) > 823 && pins.analogReadPin(AnalogPin.P0) <= 830) {
        basic.showIcon(IconNames.Silly)
    } else if (pins.analogReadPin(AnalogPin.P0) > 780 && pins.analogReadPin(AnalogPin.P0) <= 790) {
        basic.showIcon(IconNames.Giraffe)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    tm.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(200)
})
