// 因为开始和结束场景实际上是和主场景属于一个场景, 故不再继承自 Scene
class SceneEnd {
    constructor(scene) {
        scene.endImage = Canvas2dImage.new(scene.game, 'gameover')
        scene.endImage.x = 104
        scene.endImage.y = 200
        scene.endLabel = Canvas2dLabel.new(scene.game, '挂了, 按 r 重玩', 125, 300, '20px 幼圆')
        scene.addElement(scene.endImage)
        scene.addElement(scene.endLabel)
        //
        scene.game.registerAction('r', () => {
            var s = SceneMain.new(scene.game)
            scene.game.replaceScene(s)
        })
    }

    static new(scene) {
        var i = new this(scene)
        return i
    }
}
