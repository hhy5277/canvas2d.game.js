class EnemyBullet extends Canvas2dImage {
    constructor(game) {
        super(game, 'enemy_bullet')
        this.setup()
    }

    setup() {
        this.speed = 5
    }

    update() {
        this.y += this.speed
    }

    debug() {
        this.speed = config.enemy_bullet_speed.value
    }
}
