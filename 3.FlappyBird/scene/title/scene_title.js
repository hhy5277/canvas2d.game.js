// 因为开始和结束场景实际上是和主场景属于一个场景, 故不再继承自 Scene
class SceneTitle {
    constructor(scene) {
        scene.titleImage = Canvas2dImage.new(scene.game, 'title')
        scene.titleImage.x = 108
        scene.titleImage.y = 130
        scene.titleLabel = Canvas2dLabel.new(scene.game, '按 j 开始游戏', 135, 320, '20px 幼圆')
        scene.addElement(scene.titleImage)
        scene.addElement(scene.titleLabel)
    }

    static new(scene) {
        var i = new this(scene)
        return i
    }

    remove(scene) {
        scene.removeElement(scene.titleImage)
        scene.removeElement(scene.titleLabel)
    }
}
