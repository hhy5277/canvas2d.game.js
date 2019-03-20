class Canvas2dParticle extends Canvas2dImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }

    setup() {
        this.life = 7
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
    }
}

class Canvas2dParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.setup()
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    setup() {
        this.duration = 30
        this.numberOfParticles = 100
        this.particles = []
    }

    update() {
        this.duration--
        if (this.duration < 0) {
            // 从场景中删掉粒子系统
            this.scene.elements = this.scene.elements.filter((e) => {
                return e.constructor.name != 'Canvas2dParticleSystem'
            })
        }
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = Canvas2dParticle.new(this.game)
            // 设置初始化坐标
            var s = 5
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for (var p of this.particles) {
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        for (var p of this.particles) {
            p.draw()
        }
    }
}
