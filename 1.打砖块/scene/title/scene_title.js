class SceneTitle extends Canvas2dScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
        game.registerAction('b', function() {
            var s = SceneEditor.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        this.game.context.fillStyle = 'black'
        this.game.context.font = '15px 幼圆'
        this.game.context.fillText('按 k 开始游戏. 按 b 编辑关卡', 70, 100)
    }
}
