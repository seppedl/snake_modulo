input.onButtonPressed(Button.A, function () {
    richting = (richting - 1 + 4) % 4
})
input.onButtonPressed(Button.B, function () {
    richting = (richting + 1 + 4) % 4
})
// We beginnen met een slang die twee puntjes lang is, die een richting heeft en we geven aan dat er geen appel zichtbaar is.
let apple_y = 0
let y = 0
let x = 0
let richting = 0
game.setScore(2)
let punten_x = [2, 3]
let punten_y = [2, 2]
richting = randint(0, 3)
let apple_x = -1
led.plot(2, 2)
led.plot(3, 2)
basic.forever(function () {
    basic.pause(500)
    x = punten_x[0]
    y = punten_y[0]
    if (richting == 0) {
        y = (y - 1 + 5) % 5
    } else if (richting == 1) {
        x = (x + 1 + 5) % 5
    } else if (richting == 2) {
        y = (y + 1 + 5) % 5
    } else {
        x = (x - 1 + 5) % 5
    }
    for (let index = 0; index <= punten_x.length; index++) {
        if (punten_x[index] == x && punten_y[index] == y) {
            game.gameOver()
        }
    }
    punten_x.unshift(x)
    punten_y.unshift(y)
    led.plot(x, y)
    if (x == apple_x && y == apple_y) {
        apple_x = -1
        game.addScore(1)
    } else {
        led.unplot(punten_x.pop(), punten_y.pop())
    }
})
// De appel detecteert zelf wanneer hij werd opgegeten (-1) en gaat zich dan ergens willekeurig op het speelveld zetten.
// Als de appel zichtbaar is dan knippert hij  om de 200ms.
basic.forever(function () {
    if (game.isGameOver()) {
        led.unplot(apple_x, apple_y)
    } else {
        if (apple_x < 0) {
            apple_x = randint(0, 4)
            apple_y = randint(0, 4)
        }
        basic.pause(200)
        led.toggle(apple_x, apple_y)
    }
})
