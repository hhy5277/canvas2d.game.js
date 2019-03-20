class Enemy extends Canvas2dImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 4)
        this.x = randomBetween(0, 276)
        this.y = -randomBetween(70, 300)
        this.cooldown = 100
        this.currentCooldown = this.cooldown
    }

    fire() {
        if (this.currentCooldown == 0) {
            this.currentCooldown = this.cooldown
            var x = this.x + this.w / 2
            var y = this.y + 60
            var b = EnemyBullet.new(this.game)
            b.x = x - 7
            b.y = y
            this.scene.addElement(b)
        }
    }

    update() {
        this.y += this.speed
        if (this.y > 540) {
            this.setup()
        }
        if (this.currentCooldown > 0) {
            this.currentCooldown--
        }
        this.fire()
    }

    collide(bullet) {
        return rectIntersects(this, bullet).intersect
    }

    debug() {
        this.cooldown = config.enemy_bullet_cooldown.value
    }
}
