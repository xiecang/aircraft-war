class GuaImage {
    constructor(game, name) {
        this.game = game
        // 图片
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }

    static new(game, name) {
        let i = new this(game, name)
        return i
    }

    draw() {
        this.game.drawImage(this)
    }

    update() {

    }

    hasPoint(x, y) {
        // 判断一个点是否在矩形内(点击的点)
        let o = this

        let xIn = x >= o.x && x <= o.x + o.w
        let yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
}
