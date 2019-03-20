class SceneMain extends Canvas2dScene {
    constructor(game) {
        // 父类的构造函数: 拿到 this.game, 开启 debugMode, 初始化 elements
        super(game)
        // sky 背景图
        this.sky = Canvas2dImage.new(game, 'sky')
        this.addElement(this.sky)
        // 加入水管
        this.pipes = Pipes.new(game)
        this.addElement(this.pipes)
        // 循环移动的地面
        this.ground = Ground.new(game)
        this.addElement(this.ground)
        // bird
        this.bird = Bird.new(game)
        this.addElement(this.bird)
        //
        this.start = false
        this.gameover = false
        this.title = SceneTitle.new(this)
        this.setupInputs()
    }

    setupInputs() {
        var b = this.bird
        this.game.registerAction('a', () => {
            b.move(-b.speed)
        })
        this.game.registerAction('d', () => {
            b.move(b.speed)
        })
        this.game.registerAction('j', () => {
            if (this.gameover) {
                return
            }
            if (!this.start) {
                this.start = true
                this.title.remove(this)
            }
            b.jump()
        })
    }

    update() {
        if (!this.start || this.gameover) {
            return
        }
        super.update()
        if (this.pipes.collide(this.bird)) {
            this.gameover = true
            this.end = SceneEnd.new(this)
        }
    }

    debug() {
        this.bird.speed = config.bird_speed.value
    }
}
