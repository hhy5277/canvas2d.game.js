var Paddle = function(game) {
    var image = game.imageByName('paddle')
    var o = {
        image: image.image,
        w: image.w,
        h: image.h,
        x: 100,
        y: 250,
        speed: 7,
    }
    o.move = function(x) {
        if (x < 0) {
            x = 0
        } else if (x > game.canvas.width - o.w) {
            x = game.canvas.width - o.w
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(o.x - o.speed)
    }
    o.moveRight = function() {
        o.move(o.x + o.speed)
    }
    o.collide = function(ball) {
        var r = rectIntersects(o, ball)
        var intersect = r.intersect
        var direction = r.direction
        if (intersect) {
            ball.collideDirection = direction
            return true
        } else {
            return false
        }
    }
    return o
}
