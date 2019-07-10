class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        // 这里使用 config.bullet_speed 会使当前发射的 bullet 速度改变
        this.speed = config.bullet_speed
    }
    update() {
        // 这里使用 config.bullet_speed 会使当前画面的全部 bullet 速度改变
        this.y -= this.speed
    }
}
