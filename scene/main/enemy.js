class Enemy extends GuaImage {
    constructor(game) {
        let type = randomBetween(0, 1)
        let name = 'enemy' + type
        super(game, name)
        this.setup()

    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        // this.y = 0
        this.y = randomBetween(0, -250)

        this.cooldown = 0
    }

    update() {
        this.y += this.speed
        // this.y += config.enemy_speed
        if (this.y > 600) {
            this.setup()
        }

        this.fire()
    }

    debug() {
        this.y += config.enemy_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    fire() {
        // log("enemy fire", this.cooldown )
        if (this.cooldown === 0) {
            this.cooldown = 10 || config.enemyCooldown
            let x = this.x + this.w / 2
            let y = this.y
            let b = Bullet.new(this.game)
            b.x = 100
            b.y = 100
            // log(this, this.x, this.w / 2)
            this.game.scene.addEnemiesBullet(b)
            // this.game.scene.addElement(b)
        }
    }
}
