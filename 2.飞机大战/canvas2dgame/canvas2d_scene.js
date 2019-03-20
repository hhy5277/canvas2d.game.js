class Canvas2dScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.elements = []
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }

    update() {
        if (this.debugModeEnabled) {
            for (var e of this.elements) {
                e.debug && e.debug()
            }
        }
        for (var e of this.elements) {
            e.update && e.update()
        }
    }

    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }
}
