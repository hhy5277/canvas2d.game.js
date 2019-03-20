const config = {
    fps: {
        name: 'fps',
        value: 60,
        min: 1,
        max: 120,
    },
    cloud_speed: {
        name: '云的速度',
        value: 1,
        min: -10,
        max: 10,
    },
    player_speed: {
        name: '玩家速度',
        value: 5,
        min: 0,
        max: 10,
    },
    bullet_speed: {
        name: '玩家子弹速度',
        value: 5,
        min: 0,
        max: 10,
    },
    fire_cooldown: {
        name: '玩家子弹冷却时间',
        value: 9,
        min: 0,
        max: 20,
    },
    enemy_bullet_speed: {
        name: '敌机子弹速度',
        // enemy 的 speed 是randomBetween(2, 4), 故要 > 4
        value: 5,
        min: 0,
        max: 10,
    },
    enemy_bullet_cooldown: {
        name: '敌机子弹冷却时间',
        value: 100,
        min: 0,
        max: 200,
    }
}

// 每架敌机的速度使用随机数要好于固定的值, 故删去 enemy_speed 的配置项
