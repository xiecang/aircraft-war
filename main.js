let loadLevel = function(game, n) {
    n = n - 1
    let level = levels[n]
    let blocks = []
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

let blocks = []
let enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        let k = event.key
        if (k === 'p') {
            log('按下了暂停')
            window.paused = !paused
        } else if ('1234567'.includes(k)) {
            // 载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 使用滑条控制速度， input 可以动态监控值
    document.querySelector('#id-input-speed').addEventListener('input', function () {
        let input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}
let __main = function () {
    let images = {
        paddle: 'img/paddle.png',
        ball: 'img/ball.png',
        block: 'img/block.png',
    }
    // let score = 0
    // GuaGame 载入,并初始化 fps, images
    // 这里有个回调的问题需要加上function, 并将操作放在其中
    let game = GuaGame.instance(30, images, function(game){
        // 使用 scene 抽象了 update, draw
        // let scene = Scene(game)
        // game.update = function () {
        //     // 按了暂停
        //     if (window.paused) {
        //         return
        //     }
        //     // s.update
        //     scene.update()
        // }
        // game.draw = function () {
        //     // s.draw
        //     scene.draw()
        // }
        // debug 模式开启,放在外边也可用
        // enableDebugMode(game, true)
        let s = SceneTitle.new(game)
        game.runWithScene(s)
    })
    enableDebugMode(game, true)
}
__main()
