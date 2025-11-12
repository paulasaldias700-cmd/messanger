input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola :)")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Andate!")
})
radio.setGroup(1)
basic.forever(function () {
	
})
