const log = console.log.bind(console)

const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const bindAll = function(sel, eventName, callback) {
    var l = es(sel)
    for (var i = 0; i < l.length; i++) {
        var input = l[i]
        input.addEventListener(eventName, function(event) {
            callback(event)
        })
    }
}

const rectIntersects = function(a, b) {
    var minx1 = a.x
    var miny1 = a.y
    var maxx1 = a.x + a.w
    var maxy1 = a.y + a.h
    //
    var minx2 = b.x
    var miny2 = b.y
    var maxx2 = b.x + b.w
    var maxy2 = b.y + b.h
    //
    var minx = Math.max(minx1, minx2)
    var miny = Math.max(miny1, miny2)
    var maxx = Math.min(maxx1, maxx2)
    var maxy = Math.min(maxy1, maxy2)
    //
    var intersect = minx <= maxx && miny <= maxy
    var direction = ''
    // 判断是从 x 方向相交还是从 y 方向相交
    if (intersect) {
        var deltaX = maxx - minx
        var deltaY = maxy - miny
        if (deltaX < deltaY) {
            direction = 'x'
        } else if (deltaX > deltaY) {
            direction = 'y'
        } else {
            direction = 'both'
        }
    }
    var result = {
        intersect: intersect,
        direction: direction,
    }
    return result
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
