class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()

    }
    setup() {
        // this.speed = config.cloud_speed
        this.speed = 1
        this.x = randomBetween(0, 150)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y > 400 || this.y < -400) {
            this.setup()
        }
    }
    debug() {
        this.y += config.cloud_speed
    }
}