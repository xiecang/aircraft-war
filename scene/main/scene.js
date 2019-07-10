class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.speed = 10
    }
    update() {

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
}

class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.bg = GuaImage.new(this.game, 'sky')
        this.player = Player.new(this.game)
        this.player.x = 100
        this.player.y = 200
        this.cloud = GuaImage.new(this.game, 'cloud')

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
        this.addElement(this.player)
    }
    update() {
        this.cloud.y += 1
    }
    setupInputs() {
        let g = this.game
        let s = this

        log('g: ', g, 's: ', s, 'this: ', this)
        // 这里只能这样写, 注释的不能运行 TypeError: this.player is undefined
        // this.game.registerAction('a', function () {
        //     this.player.moveLeft()
        // })
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
    }
}
