var Editor = function(game) {
    var image = game.imageByName('editor')
    var o = {
        image: image.image,
        w: image.w,
        h: image.h,
        x: 0,
        y: 0,
    }
    return o
}
