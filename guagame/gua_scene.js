class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModelEnable = true
        this.elements = []
    }

    static new(game) {
        let i = new this(game)
        return i
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }

    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }

    update() {
        if (this.debugModelEnable) {
            for (let i = 0; i < this.elements.length; i++) {
                const e = this.elements[i]
                e.debug && e.debug()
            }
        }

        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }
}
