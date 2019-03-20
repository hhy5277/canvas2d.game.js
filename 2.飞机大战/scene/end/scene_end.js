class SceneEnd extends Canvas2dScene {
    constructor(game) {
        super(game)
        var endImage = Canvas2dImage.new(game, 'end')
        var label = Canvas2dLabel.new(game, '挂了, 按 r 返回标题界面', 65, 260, '20px 幼圆')
        //
        this.addElement(endImage)
        this.addElement(label)
        //
        game.registerAction('r', function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
}
