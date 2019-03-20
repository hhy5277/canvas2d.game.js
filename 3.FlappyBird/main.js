var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }

    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
}

var __main = function() {
    var images = {
        title: 'img/bird/title.png',
        sky: 'img/bird/sky.png',
        pipe: 'img/bird/pipe.png',
        ground: 'img/bird/ground.png',
        bird0: 'img/bird/bird0.png',
        bird1: 'img/bird/bird1.png',
        bird2: 'img/bird/bird2.png',
        bird3: 'img/bird/bird3.png',
        gameover: 'img/bird/gameover.png',
    }

    var game = Canvas2dGame.instance(60, images, function(g) {
        var s = SceneMain.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(true)
}

__main()
