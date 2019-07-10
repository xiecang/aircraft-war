class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.bg = GuaImage.new(this.game, 'sky')
        this.player = GuaImage.new(this.game, 'player')
        this.player.x = 100
        this.player.y = 200

    }
    draw() {
        this.game.drawImage(this.bg)
        this.game.drawImage(this.player)
    }
}
