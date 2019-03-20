class SceneMain extends Canvas2dScene {
    constructor(game) {
        super(game)
        // 初始化
        this.paddle = Paddle(game)
        this.ball = Ball(game)
        if (!window.blocks) {
            window.blocks = loadLevel(game, 1)
        }
        this.score = 0
        //
        game.registerAction('a', () => {
            this.paddle.moveLeft()
        })
        game.registerAction('d', () => {
            this.paddle.moveRight()
        })
        game.registerAction('f', () => {
            this.ball.fire()
        })
        //
        this.drag()
    }

    update() {
        if (window.paused) {
            return
        }
        // 环境隔离
        var game = this.game
        var paddle = this.paddle
        var ball = this.ball
        var blocks = window.blocks
        //
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
        if (paddle.collide(ball)) {
            ball.rebound()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.hit()
                ball.rebound()
                this.score += 100
            }
        }
    }

    draw() {
        var game = this.game
        var paddle = this.paddle
        var ball = this.ball
        var blocks = window.blocks
        //
        game.context.fillStyle = '#444'
        game.context.fillRect(0, 0, game.canvas.width, game.canvas.height)
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        game.context.fillStyle = 'white'
        game.context.fillText(`分数: ${this.score}`, 10, 290)
    }

    drag() {
        var canvas = this.game.canvas
        var ball = this.ball
        //
        var enableDrag = false
        var deltaX = 0
        var deltaY = 0
        canvas.addEventListener('mousedown', (event) => {
            var x = event.offsetX
            var y = event.offsetY
            // 检查是否点中了 ball
            if (ball.hasPoint(x, y)) {
                // 设置拖拽状态
                enableDrag = true
                var delta = ball.deltaDistance(x, y)
                deltaX = delta.x
                deltaY = delta.y
            }
        })
        canvas.addEventListener('mousemove', (event) => {
            var x = event.offsetX
            var y = event.offsetY
            if (enableDrag) {
                ball.x = x - deltaX
                ball.y = y - deltaY
            }
        })
        canvas.addEventListener('mouseup', (event) => {
            enableDrag = false
        })
    }
}
