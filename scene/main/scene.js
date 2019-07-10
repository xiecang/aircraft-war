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
        this.cloud = GuaImage.new(this.game, 'cloud')

        // 进一步提取
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
    }
    update() {
        this.cloud.y += 1
    }
}
