class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            let s = Scene(game)
            game.replaceScene(s)
        })
    }
    // 使用 SceneTitle.new() 替代 new SceneTitle() 使用方式
    // static new(game) {
    //     let i = new this(game)
    //     return i
    // }
    draw() {
        // draw lables
        this.game.context.fillText('按 k 开始游戏', 150, 200)
    }
}
