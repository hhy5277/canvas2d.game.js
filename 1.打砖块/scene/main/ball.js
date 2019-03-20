var Ball = function(game) {
    var image = game.imageByName('ball')
    var o = {
        image: image.image,
        w: image.w,
        h: image.h,
        x: 100,
        y: 100,
        speedX: 5,
        speedY: 5,
        fired: false,
        collideDirection: '',
    }
    o.fire = function() {
        o.fired = true
    }
    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x + o.w > game.canvas.width) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.h > game.canvas.height) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.rebound = function() {
        if (o.collideDirection == 'x') {
            o.speedX *= -1
        } else if (o.collideDirection == 'y') {
            o.speedY *= -1
        } else if (o.collideDirection == 'both') {
            o.speedX *= -1
            o.speedY *= -1
        }
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    o.deltaDistance = function(x, y) {
        var deltaX = x - o.x
        var deltaY = y - o.y
        var delta = {
            x: deltaX,
            y: deltaY,
        }
        return delta
    }
    return o
}
