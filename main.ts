function Send_Display () {
    Display_Grid = ""
    for (let index = 0; index <= 4; index++) {
        Y_Pos = index
        for (let index = 0; index <= 4; index++) {
            X_Pos = index
            if (led.point(X_Pos, Y_Pos)) {
                Display_Grid = "" + Display_Grid + "1"
            } else {
                Display_Grid = "" + Display_Grid + "0"
            }
        }
    }
    if (Previous_array != Display_Grid) {
        serial.writeLine("DISPLAY," + Display_Grid)
        Previous_array = Display_Grid
        basic.pause(20)
    }
}
let Previous_array = ""
let X_Pos = 0
let Y_Pos = 0
let Display_Grid = ""
serial.redirectToUSB()
basic.showString("Press A")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 10; index++) {
            led.toggle(randint(0, 4), randint(0, 4))
        }
        Send_Display()
    }
})
