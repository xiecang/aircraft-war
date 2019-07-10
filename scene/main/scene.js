class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.bg = GuaImage.new(game, 'sky')
        // game.registerAction('k', function () {
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // })
    }
    draw() {
        // draw lables
        // this.game.context.fillText('按 k 开始游戏', 150, 200)
        this.game.drawImage(this.bg)
    }
}
