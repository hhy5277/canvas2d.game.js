class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.columsOfPipe = 3
        this.pipeXSpace = 200   // 管子横向间距
        this.pipeYSpace = 150   // 管子纵向间距
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = Canvas2dImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.pipeXSpace
            var p2 = Canvas2dImage.new(game, 'pipe')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    static new(game) {
        return new this(game)
    }

    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-this.pipeYSpace, 0)
        p2.y = p1.y + p1.h + this.pipeYSpace
    }

    update() {
        for (var i = 0; i < this.pipes.length; i += 2) {
            var p1 = this.pipes[i]
            var p2 = this.pipes[i+1]
            p1.x -= 5
            p2.x -= 5
            if (p1.x < -100) {
                p1.x += this.pipeXSpace * this.columsOfPipe
                p2.x += this.pipeXSpace * this.columsOfPipe
                this.resetPipesPosition(p1, p2)
            }
        }
    }

    draw() {
        for (var p of this.pipes) {
            p.flipAndRotate()
        }
    }

    collide(bird) {
        for (var p of this.pipes) {
            if (rectIntersects(p, bird.img).intersect) {
                return true
            }
        }
    }

    debug() {
        this.pipeXSpace = config.pipeXSpace.value
        this.pipeYSpace = config.pipeYSpace.value
    }
}
