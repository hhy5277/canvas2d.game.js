class Bird extends Canvas2dAnimation {
    constructor(game) {
        super(game)
        this.x = 120
        this.y = 200
        this.rotation = 0
        // 左右飞行的速度
        this.speed = 2
        // 重力和速度
        this.gy = 10
        this.vy = 0
    }

    update() {
        super.update()
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.06
        var h = 476
        if (this.y > h) {
            this.y = h
        }
        // 更新角度
        if (this.rotation < 90 && this.y < h) {
            this.rotation += 2
        }
    }

    draw() {
        this.img.x = this.x
        this.img.y = this.y
        this.img.flipX = this.flipX
        this.img.rotation = this.rotation
        super.draw()
    }

    jump() {
        this.vy = -6
        this.rotation = -45
    }

    move(x) {
        this.flipX = x < 0
        this.x += x
    }
}
