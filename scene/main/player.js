class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        // todo 可配置
        this.lives = 10

        this.speed = config.player_speed
        log('player speed', this.speed)
        this.cooldown = 0
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }

        // 自动开火
        this.fire()
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.cooldown
            let x = this.x + this.w / 2
            let y = this.y
            let b = Bullet.new(this.game)
            b.camp = 'player'
            b.x = x
            b.y = y
            this.scene.addElement(b)
            log(this.scene.elements)
        }
    }

}
