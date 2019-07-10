class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.bg = GuaImage.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game, 'cloud')

        this.player = Player.new(this.game)
        this.player.x = 100
        this.player.y = 200

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)

        // 添加敌人
        this.numberOfEnemies = 10
        this.addEnemies()
    }

    update() {
        super.update()
        this.cloud.y += 1
    }

    setupInputs() {
        let g = this.game
        let s = this

        // log('g: ', g, 's: ', s, 'this: ', this)
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
        g.registerAction('f', function () {
            s.player.fire()
        })
    }

    addEnemies() {
        let es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        // 保存es
        this.enemies = es
    }
}
