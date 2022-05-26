function inxylijst (x_list: any[], y_list: any[], x: number, y: number) {
	
}
input.onButtonPressed(Button.A, function () {
    richting += -1
    if (richting < 0) {
        richting = 3
    }
})
input.onButtonPressed(Button.B, function () {
    richting += 1
    if (richting > 3) {
        richting = 0
    }
})
let apple_y = 0
let y = 0
let x = 0
let richting = 0
let punten_x = [2, 3]
let punten_y = [2, 2]
richting = 0
let apple_x = -1
led.plot(2, 2)
led.plot(3, 2)
basic.forever(function () {
    basic.pause(500)
    x = punten_x[0]
    y = punten_y[0]
    if (richting == 0) {
        y += -1
        if (y < 0) {
            y = 4
        }
    } else if (richting == 1) {
        x += 1
        if (x > 4) {
            x = 0
        }
    } else if (richting == 2) {
        y += 1
        if (y > 4) {
            y = 0
        }
    } else {
        x += -1
        if (x < 0) {
            x = 4
        }
    }
    if (false && false) {
    	
    }
    punten_x.unshift(x)
    punten_y.unshift(y)
    led.plot(x, y)
    if (x == apple_x && y == apple_y) {
        apple_x = -1
    } else {
        led.unplot(punten_x.pop(), punten_y.pop())
    }
})
basic.forever(function () {
    if (apple_x < 0) {
        apple_x = randint(0, 4)
        apple_y = randint(0, 4)
    }
    basic.pause(200)
    led.toggle(apple_x, apple_y)
})
