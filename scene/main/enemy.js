class Enemy extends GuaImage {
    constructor(game) {
        let type = randomBetween(0, 1)
        let name = 'enemy' + type
        super(game, name)
        this.lives = type + 1
        this.setup()

    }

    setup() {
        this.speed = 3
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
        this.y += config.enemy_speed.value
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    fire() {
        // log("enemy fire", this.cooldown )
        if (this.cooldown === 0) {
            this.cooldown = config.enemy_cool_down.value || 1000
                let x = this.x + this.w / 2
            let y = this.y + this.h / 2
            let b = Bullet.new(this.game)
            b.camp = 'enemy'
            // todo 写到配置中
            b.speed = config.enemy_bullet_speed.value || 9
            b.x = x
            b.y = y
            // log(this, this.x, this.w / 2)
            // this.game.scene.addEnemiesBullet(b)
            this.game.scene.addElement(b)
        }
    }
}
