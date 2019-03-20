class Player extends Canvas2dImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 5
        this.cooldown = 9
        this.currentCooldown = this.cooldown
    }

    update() {
        if (this.currentCooldown > 0) {
            this.currentCooldown--
        }
    }

    fire() {
        if (this.currentCooldown == 0) {
            this.currentCooldown = this.cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            // bullet 图片的 width 是 9
            b.x = x - 5
            b.y = y
            this.scene.addElement(b)
        }
    }

    collide(bullet) {
        return rectIntersects(this, bullet).intersect
    }

    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }

    debug() {
        this.speed = config.player_speed.value
        this.cooldown = config.fire_cooldown.value
    }
}
