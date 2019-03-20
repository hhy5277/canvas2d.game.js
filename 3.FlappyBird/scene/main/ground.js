class Ground {
    constructor(game) {
        this.grounds = []
        this.skipCount = 5
        for (var i = 0; i < 20; i++) {
            var g = Canvas2dImage.new(game, 'ground')
            g.x = i * 25
            g.y = 500
            this.grounds.push(g)
        }
    }

    static new(game) {
        return new this(game)
    }

    update() {
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 5
            offset = 20
        }
        for (var i = 0; i < 20; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }

    draw() {
        for (var p of this.grounds) {
            p.draw()
        }
    }
}
