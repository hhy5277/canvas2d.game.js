class SceneMain extends Canvas2dScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        //
        this.sky = Sky.new(game)
        this.cloud = Cloud.new(game)
        this.player = Player.new(game)
        this.player.x = 125
        this.player.y = 350
        //
        this.addElement(this.sky)
        this.addElement(this.cloud)
        this.addElement(this.player)
        //
        this.addEnemies()
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
    }

    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', () => {
            s.player.moveLeft()
        })
        g.registerAction('d', () => {
            s.player.moveRight()
        })
        g.registerAction('w', () => {
            s.player.moveUp()
        })
        g.registerAction('s', () => {
            s.player.moveDown()
        })
        g.registerAction('j', () => {
            s.player.fire()
        })
    }

    addParticles(x, y) {
        var ps = Canvas2dParticleSystem.new(this.game, x, y)
        this.addElement(ps)
    }

    hitEnemy(enemy, bullet) {
        var e = enemy
        var b = bullet
        // 粒子效果
        var x = e.x + e.w / 2
        var y = e.y + e.h / 2
        this.addParticles(x, y)
        // 重置敌机位置
        e.setup()
        // 移除子弹
        this.elements = this.elements.filter((ele) => {
            return ele != b
        })
    }

    gameover() {
        var x = this.player.x + this.player.w / 2
        var y = this.player.y + this.player.h / 2
        this.addParticles(x, y)
        setTimeout(() => {
            var s = SceneEnd.new(this.game)
            this.game.replaceScene(s)
        }, 500)
    }

    update() {
        super.update()
        var bullets = this.elements.filter((b) => {
            return (b.constructor.name == 'Bullet') && b.y >= 0 && b.y <= 540
        })
        var enemies = this.elements.filter((e) => {
            return e.constructor.name == 'Enemy' && e.y >= 0 && e.y <= 540
        })
        var enemyBullet = this.elements.filter((eb) => {
            return eb.constructor.name == 'EnemyBullet' && eb.y >= 0 && eb.y <= 540
        })
        //
        for (var e of enemies) {
            for (var b of bullets) {
                if (e.collide(b)) {
                    // 子弹击中敌机
                    this.hitEnemy(e, b)
                }
            }
            // 敌机和玩家相撞, 游戏结束
            if (e.collide(this.player)) {
                this.gameover()
            }
        }
        // 玩家被子弹击中, 游戏结束
        for (var eb of enemyBullet) {
            if (this.player.collide(eb)) {
                this.gameover()
            }
        }
    }
}
