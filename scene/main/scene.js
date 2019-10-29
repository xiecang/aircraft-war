const config = {
    player_speed: 10,
    cloud_speed: 2,
    enemy_speed: 3,
    bullet_speed: -5,
    cooldown: 3,
    enemyCooldown: 1000,
}


class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        // 存储本场景内的文件
        this.setupSceneElement()

        // 初始化场景角色
        this.bg = GuaImage.new(this.game, 'bg')
        this.cloud = Cloud.new(this.game, 'cloud')

        this.player = Player.new(this.game)
        this.player.x = 100
        this.player.y = 500

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)

        // 添加敌人
        this.numberOfEnemies = 3
        this.addEnemies(this.numberOfEnemies)
    }

    setupSceneElement() {
        this.players = []
        this.enemies = []
        this.playerBullets = []
        this.enemyBullets = []
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

        this.checkSceneElement()

        // cloud
        self.cloud.y += 1

        // 自动添加敌人
        let numOfDiedEnemy = this.numberOfEnemies - this.enemies.length
        if (numOfDiedEnemy > 0) {
            this.addEnemies(numOfDiedEnemy)
        }

        // 子弹走出边界后，从场景中清除


        // 玩家与子弹碰撞
        for (let b of this.enemyBullets) {
            if (rectIntersects(this.player, b)) {
                // 玩家生命减一
                this.player.kill()
            }
        }

        // 敌机与子弹碰撞
        for (let bullet of this.playerBullets) {
            for (let enemy of this.enemies) {
                if (rectIntersects(enemy, bullet)) {
                    enemy.kill()
                }
            }
        }

        //
        // // 敌机碰撞
        // for (let e of self.enemies) {
        //     if (rectIntersects(this.player, e)) {
        //         this.player.kill()
        //         e.kill()
        //     }
        // }
        //
        // // 子弹碰撞
        // for (let enemiesBullet of self.enemiesBullets) {
        //     for (let playerBullet of self.playerBullets) {
        //         if (rectIntersects(enemiesBullet, playerBullet)) {
        //             enemiesBullet.kill()
        //             playerBullet.kill()
        //         }
        //     }
        // }

        // 爆炸效果
    }


    addEnemies(numberOfEnemies) {
        for (let i = 0; i < numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            this.addElement(e)
        }
    }

    addEnemy(enemy) {
        this.enemies.push(enemy)
    }

    checkSceneElement() {
        this.setupSceneElement()
        for(let e of this.elements) {
            if (e instanceof Player) {
                this.players.push(e)
            } else if (e instanceof Enemy) {
                this.enemies.push(e)
            } else if (e instanceof Bullet) {
                if (e.camp === "player") {
                    this.playerBullets.push(e)
                } else if(e.camp === "enemy") {
                    this.enemyBullets.push(e)
                }
            }
        }
    }
}
