class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModelEnable = true
        this.elements = {
            "base": [],
        }
        // this.elements = []
    }

    // 将子类中的共同方法提取到父类中
    static new(game) {
        return new this(game)
    }

    addElement(img, name) {
        let n = name || 'base'
        img.scene = this
        this.elements[n].push(img)
    }

    deleteElement(img, name) {
        let n = name || 'base'
        img.scene = this
        let index = this.elements[n].indexOf(img)
        this.elements[n].splice(index, 1)
    }


    drawRect(x, y, w, h, color) {
        let self = this
        let context = this.game.context

        context.fillStyle = color
        context.fillRect(x, y, w, h)
    }

    drawLabel(text, x, y, color, fontSize) {
        let context = this.game.context

        // log('drawLabel', x, y)
        context.font = fontSize + "px serif";
        context.fillStyle = color
        context.fillText(text, x, y)
    }

    draw() {
        for(let k in this.elements) {
            let element = this.elements[k]
            for (let i = 0; i < element.length; i++) {
                let e = element[i]
                e.draw()
            }
        }

    }

    update() {
        if (this.debugModelEnable) {
            // for (let i = 0; i < this.elements.length; i++) {
            //     const e = this.elements[i]
            //     e.debug && e.debug()
            // }

            for(let k in this.elements) {
                let element = this.elements[k]
                for (let i = 0; i < element.length; i++) {
                    let e = element[i]
                    e.debug && e.debug()
                }
            }
        }

        for(let k in this.elements) {
            let element = this.elements[k]
            for (let i = 0; i < element.length; i++) {
                let e = element[i]
                e.update()
            }
        }
        // for (let i = 0; i < this.elements.length; i++) {
        //     let e = this.elements[i]
        //     e.update()
        // }
    }
}
