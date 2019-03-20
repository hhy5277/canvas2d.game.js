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
        }
    })
}

var __main = function() {
    var images = {
        title: 'img/title.png',
        end: 'img/end.png',
        bullet: 'img/bullet.png',
        enemy_bullet: 'img/enemy_bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'fire.png',
    }

    var game = Canvas2dGame.instance(60, images, function(g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
