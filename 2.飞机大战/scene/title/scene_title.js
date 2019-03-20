class SceneTitle extends Canvas2dScene {
    constructor(game) {
        super(game)
        var titleImage = Canvas2dImage.new(game, 'title')
        titleImage.y = 100
        var label = Canvas2dLabel.new(game, '按 k 开始游戏', 115, 300, '20px 幼圆')
        //
        this.addElement(titleImage)
        this.addElement(label)
        //
        game.registerAction('k', () => {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }
}
