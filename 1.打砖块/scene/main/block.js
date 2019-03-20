var Block = function(game, position) {
    var p = position
    var health = p.health || 1
    var image = game.imageByName(`block${health}`)
    var o = {
        image: image.image,
        w: image.w,
        h: image.h,
        x: p.x * 50,
        y: p.y * 20,
        health: health,
        alive: true,
    }
    o.hit = function() {
        o.health--
        if (o.health < 1) {
            o.alive = false
        } else {
            o.image = game.imageByName(`block${o.health}`).image
        }
    }
    o.collide = function(ball) {
        var r = rectIntersects(o, ball)
        var intersect = r.intersect
        var direction = r.direction
        if (o.alive && intersect) {
            ball.collideDirection = direction
            return true
        } else {
            return false
        }
    }
    return o
}
