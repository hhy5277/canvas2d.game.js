class Canvas2dImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        //
        this.flipX = false
        this.flipY = false
        this.rotation = 0
    }

    static new(game, name) {
        var i = new this(game, name)
        return i
    }

    update() {
    }

    draw() {
        this.game.drawImage(this)
    }

    flipAndRotate() {
        var context = this.game.context
        context.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        var scaleX = this.flipX ? -1 : 1
        var scaleY = this.flipY ? -1 : 1
        context.scale(scaleX, scaleY)
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
}
