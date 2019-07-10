class Enemy extends GuaImage {
    constructor(game) {
        let type = randomBetween(0, 4)
        let name = 'enemy' + type
        super(game, name)
        this.setup()

    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        // this.y = 0
        this.y = randomBetween(0, -250)
    }

    update() {
        this.y += this.speed
        // this.y += config.enemy_speed
        if (this.y > 600) {
            this.setup()
        }
    }

    debug() {
        this.y += config.enemy_speed
    }
}
