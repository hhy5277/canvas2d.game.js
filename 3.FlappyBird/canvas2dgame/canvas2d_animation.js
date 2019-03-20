class Canvas2dAnimation {
    constructor(game) {
        this.game = game
        this.animations = {}
        // 循环载入所有动画
        for (var a of animationConfig) {
            this.animationName = a.animationName
            this.numberOfFrames = a.numberOfFrames
            // 存储 Canvas2dImage 的数组
            this.animations[this.animationName] = []
            for (var i = 0; i < this.numberOfFrames; i++) {
                var name = `${this.animationName}${i}`
                var img = Canvas2dImage.new(game, name)
                this.animations[this.animationName].push(img)
            }
        }
        this.img = this.frames()[0]
        // 每 numberOfFrames 帧切换一次图片(实际上多长时间都行)
        this.frameIndex = 0
        this.frameCount = this.numberOfFrames
    }

    static new(game) {
        return new this(game)
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = this.numberOfFrames
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.img = this.frames()[this.frameIndex]
        }
    }

    draw() {
        this.img.flipAndRotate()
    }
}
