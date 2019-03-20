class Canvas2dLabel {
    constructor(game, text, x, y, font) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
        this.font = font
    }

    static new(game, text, x, y, font) {
        return new this(game, text, x, y, font)
    }
    
    draw() {
        this.game.context.font = this.font
        this.game.context.fillText(this.text, this.x, this.y)
    }
}
