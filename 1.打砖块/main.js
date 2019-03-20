var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }

    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
             // 为了 debug 临时加的载入关卡功能
            window.blocks = loadLevel(game, Number(k))
        }
    })

    // 控制速度
    var input = document.querySelector("#id-input-speed")
    input.addEventListener('input', function(event) {
        var speed = Number(event.target.value)
        window.fps = speed
    })
}

var __main = function() {
    var images = {
        paddle: 'img/paddle.png',
        ball: 'img/ball.png',
        block1: 'img/block1.png',
        block2: 'img/block2.png',
        block3: 'img/block3.png',
        editor: 'img/editor.png',
    }

    var game = Canvas2dGame.instance(60, images, function(g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
