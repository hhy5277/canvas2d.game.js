class Cloud extends Canvas2dImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }

    setup() {
        this.speed = 1
        this.x = randomBetween(-100, 100)
        this.y = -randomBetween(190, 250)
    }

    update() {
        this.y += this.speed
        if (this.y > 540) {
            this.setup()
        }
    }

    debug() {
        this.speed = config.cloud_speed.value
    }
}
