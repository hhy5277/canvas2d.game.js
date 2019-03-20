const config = {
    fps: {
        name: 'fps',
        value: 60,
        min: 1,
        max: 120,
    },
    bird_speed: {
        name: '鸟的横向速度',
        min: 0,
        value: 2,
        max: 10,
    },
    pipeXSpace: {
        name: '管子横向间距',
        value: 200,
        min: 0,
        max: 400,
    },
    pipeYSpace: {
        name: '管子纵向间距',
        value: 150,
        min: 0,
        max: 600,
    },
}

const animationConfig = [
    {
        animationName: 'bird',
        numberOfFrames: 4,
    }
]
