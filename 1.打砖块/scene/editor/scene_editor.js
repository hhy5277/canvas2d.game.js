class SceneEditor extends Canvas2dScene {
    constructor(game) {
        super(game)
        this.editor = Editor(game)
        this.block1 = Block(game, {x: 1, y: 8, health: 1,})
        this.block2 = Block(game, {x: 1, y: 10, health: 2,})
        this.block3 = Block(game, {x: 1, y: 12, health: 3,})
        //
        window.blocks = []
        this.edit()
        //
        game.registerAction('k', function() {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.drawImage(this.editor)
        var blocks = window.blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }
        //
        this.game.drawImage(this.block1)
        this.game.drawImage(this.block2)
        this.game.drawImage(this.block3)
        this.game.context.fillText('一条命', 110, 172)
        this.game.context.fillText('两条命', 110, 215)
        this.game.context.fillText('三条命', 110, 255)
        this.game.context.fillText('点选灰色格子一次或多次来编辑关卡, 按 k 开始游戏', 20, 285)
    }

    edit() {
        var blocks = window.blocks
        this.game.canvas.addEventListener('mousedown', (event) => {
            var x = Math.floor(event.offsetX / 50)
            var y = Math.floor(event.offsetY / 20)
            if (y > 6) {
                return
            }
            var selected = false
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].x === x * 50 && blocks[i].y === y * 20) {
                    var health = (blocks[i].health + 1) % 4
                    if (health === 0) {
                        // 取消选择
                        blocks.splice(i, 1)
                    } else {
                        // 更改生命值
                        var p = {x: x, y: y, health: health,}
                        blocks[i] = Block(this.game, p)
                    }
                    selected = true
                }
            }
            if (!selected) {
                // 选择新位置
                var p = {x: x, y: y, health: 1,}
                var b = Block(this.game, p)
                blocks.push(b)
            }
        })
    }
}
