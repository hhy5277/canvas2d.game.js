class Canvas2dGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = false
        })
        //
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    update() {
        this.scene.update()
    }

    clear() {
        this.scene.clear()
    }

    draw() {
        this.scene.draw()
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    runloop() {
        var actions = Object.keys(this.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (this.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                this.actions[key]()
            }
        }

        this.update()
        this.clear()
        this.draw()
        var self = this
        setTimeout(function() {
            self.runloop()
        }, 1000/window.fps)
    }

    init() {
        var loads = []
        var names = Object.keys(this.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = this.images[name]
            let img = new Image()
            img.src = path
            img.onload = () => {
                this.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                if (loads.length == names.length) {
                    this.__start()
                }
            }
        }
    }

    imageByName(name) {
        var image = this.images[name]
        var o = {
            image: image,
            w: image.width,
            h: image.height,
        }
        return o
    }

    runWithScene(scene) {
        this.scene = scene
        // 开始运行程序
        setTimeout(() => {
            this.runloop()
        }, 1000/window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start() {
        this.runCallback(this)
    }
}
