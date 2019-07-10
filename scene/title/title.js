class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        let i  = new this(game, text)
        return i
    }
    draw() {
        this.game.context.fillText(this.text, 150, 200)
    }
    update() {

    }
}



// 继承父类 GuaScene
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // game.registerAction('k', function () {
        //     let s = Scene(game)
        //     game.replaceScene(s)
        // })
        let label = GuaLabel.new(game, 'hello')
        this.addElement(label)

        let particle = GuaParticleSystem.new(game)
        this.addElement(particle)
    }
    // 使用 SceneTitle.new() 替代 new SceneTitle() 使用方式
    // static new(game) {
    //     let i = new this(game)
    //     return i
    // }
    // draw() {
    //     // draw lables
    //     // this.game.context.fillText('按 k 开始游戏', 150, 200)
    //     // 继承父类的 draw(), 如果有 draw（）就会覆盖父类的 draw(),所以要用 super.draw()
    //     super.draw()
    // }
}
