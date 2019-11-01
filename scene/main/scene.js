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

        this.level = Level.new(this.game)
    }

    setupSceneElement() {
        this.players = []
        this.enemies = []
        this.bullets = []
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
        // 子弹走出边界后，从场景中清除
        this.deleteOutOfBoundsBullets()

        // cloud
        self.cloud.y += 1

        // 自动添加敌人
        let numOfDiedEnemy = this.numberOfEnemies - this.enemies.length
        if (numOfDiedEnemy > 0) {
            this.addEnemies(numOfDiedEnemy)
        }

        // 玩家与子弹碰撞
        for (let b of this.enemyBullets) {
            if (this.player.collide(b)) {
                // 爆炸效果
                let o = this.player
                let x = o.x + o.w / 2
                let y = o.y + o.h / 2
                let ps = GuaParticleSystem.new(this.game, x, y)
                this.addElement(ps)

                // 玩家生命减一
                this.player.kill()
                b.kill()
            }
        }

        // 敌机与子弹碰撞
        for (let bullet of this.playerBullets) {
            for (let enemy of this.enemies) {
                if (enemy.collide(bullet)) {
                    // 爆炸效果
                    let o = enemy
                    let x = o.x + o.w / 2
                    let y = o.y + o.h / 2
                    let ps = GuaParticleSystem.new(this.game, x, y)
                    this.addElement(ps)
                    enemy.kill()
                    bullet.kill()
                    this.level.score += 100
                    break
                }
            }
        }


        // 敌机与飞机碰撞
        for (let e of self.enemies) {
            if (this.player.collide(e)) {
                let o = this.player
                let x = o.x + o.w / 2
                let y = o.y + o.h / 2
                let ps = GuaParticleSystem.new(this.game, x, y)
                this.addElement(ps)
                this.level.score += 100
                this.player.kill()
                e.kill()
            }
        }

        // 子弹碰撞
        for (let enemiesBullet of self.enemyBullets) {
            for (let playerBullet of self.playerBullets) {
                if (playerBullet.collide(enemiesBullet)) {
                    enemiesBullet.kill()
                    playerBullet.kill()
                    this.level.score += 10
                }
            }
        }
    }

    draw() {
        super.draw()

        this.drawLabel('分数: ' + this.level.score, 10, 840, 'yellow', 20)
        this.drawLabel('生命: ' + this.player.lives, 405, 25, 'yellow', 20)

    }

    deleteOutOfBoundsBullets() {
        for (let b of this.bullets) {
            if(b.x > CANVAS_WIDTH && b.y > CANVAS_HEIGHT) {
                b.kill()
            }
        }
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
                this.bullets.push(e)
            }
        }
    }
}
