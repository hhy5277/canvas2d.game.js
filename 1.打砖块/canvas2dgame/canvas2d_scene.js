class Canvas2dScene {
    constructor(game) {
        this.game = game
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    update() {
    }

    clear() {
        this.game.context.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height)
    }

    draw() {
    }
}
