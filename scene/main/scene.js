const config = {
    player_speed: 10,
    cloud_speed: 2,
    enemy_speed: 5,
    bullet_speed: 5,
    cooldown: 3,
    enemyCooldown: 10,
}


class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        // 存储本场景内的文件
        this.playerBullet = []
        this.enemiesBullet = []
        this.elements.enemiesBullet = this.playerBullet
        this.elements.playerBullet = this.enemiesBullet

        // 初始化场景角色
        this.bg = GuaImage.new(this.game, 'bg')
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

    setupInputs() {
        let g = this.game
        let s = this

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

    update() {
        super.update()
        let self = this
        // cloud
        self.cloud.y += 1


        // 玩家与子弹碰撞
        if (this.player.alive) {
            for (let i = 0; i < self.enemiesBullet.length; i++) {
                let e = self.enemiesBullet[i]
                if (rectIntersects(this.player, e)) {
                    // 玩家生命减一
                    this.player.kill()
                }
            }
        }

        // rectIntersects(self.player,)

        // 敌机碰撞

        // 子弹碰撞

        // 爆炸效果
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

    addEnemy(enemy) {
        this.enemies.push(enemy)
    }

    addEnemiesBullet(bullet) {
        this.enemiesBullet.push(bullet)
    }

    deletePlayer(player) {
        this.deleteElement(player)
    }
}
