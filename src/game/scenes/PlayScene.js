import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
    this.score = 0;
    this.heroSpeed = 2;
    this.collisionDist = 35;
    this.enemySpeed = 2;
    this.enemyXDirection = 1;
    this.enemyYDirection = 1;
    this.finalScore = 0;
  }

  create () {
    // background
    this.add.image(303, 299, 'labBG')

    // hero
    this.hero = this.add.sprite(100, 150, this.game.scene.scenes[0].heroName)
    this.hero.setScale(.4)
    
    // nugget
    this.nugget = this.add.sprite(Phaser.Math.RND.between(20, 580), Phaser.Math.RND.between(20, 580), 'nugget')
    this.nugget.setScale(.4)

    // enemy
    this.enemy = this.add.sprite(Phaser.Math.RND.between(400, 580), Phaser.Math.RND.between(400, 580), 'enemy')
    this.enemy.setScale(.4)

    // score
    this.scoreText = this.add.text(10, 10, 'score: '+this.score, {fontSize: '32px', fill: '#FFF'})
    
    // bind keys
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
  }

  update () {
    if (this.leftKey.isDown)
    {
      this.hero.x -= this.heroSpeed;
    }
    if (this.rightKey.isDown)
    {
      this.hero.x += this.heroSpeed;
    }
    if (this.upKey.isDown)
    {
      this.hero.y -= this.heroSpeed;
    }
    if (this.downKey.isDown)
    {
      this.hero.y += this.heroSpeed;
    }

    // detect nugget collision, increase score, move nugget
    if(this.hero.x - this.nugget.x <= this.collisionDist 
      && this.hero.x - this.nugget.x >= -this.collisionDist
      && this.hero.y - this.nugget.y <= this.collisionDist
      && this.hero.y - this.nugget.y >= -this.collisionDist)
    { 
      this.nugget.x = Phaser.Math.RND.between(20, 580)
      this.nugget.y = Phaser.Math.RND.between(20, 580)
      this.score += 10
      this.scoreText.setText("score: " + this.score)
    }

    // detect enemy collision, end game.
    if(this.hero.x - this.enemy.x <= this.collisionDist 
      && this.hero.x - this.enemy.x >= -this.collisionDist
      && this.hero.y - this.enemy.y <= this.collisionDist
      && this.hero.y - this.enemy.y >= -this.collisionDist)
    { 
      this.finalScore = this.score
      this.score = 0
      this.enemySpeed = 2
      this.scene.start('EndScene')
    }

    this.moveEnemy()

    // detect enemy collision with nugget.
    if(this.nugget.x - this.enemy.x <= this.collisionDist 
      && this.nugget.x - this.enemy.x >= -this.collisionDist
      && this.nugget.y - this.enemy.y <= this.collisionDist
      && this.nugget.y - this.enemy.y >= -this.collisionDist)
    { 
      this.enemySpeed += .1
      console.log("enemy speed", this.enemySpeed)
    }
    
  }

  moveEnemy() {
    this.enemy.x += this.enemyXDirection * this.enemySpeed
    this.enemy.y += this.enemyYDirection * this.enemySpeed

    if (this.enemy.x <= 8)
    {
      console.log(Phaser.Math.RND.between(1, 99))
      this.enemyXDirection = 1;
      this.enemyYDirection = this.enemyYDirection * Phaser.Math.RND.between(50, 120)/100
    }
    if (this.enemy.x >= 595 )
    {
      this.enemyXDirection = -1;
      this.enemyYDirection = this.enemyYDirection * Phaser.Math.RND.between(50, 120)/100
    }

    if (this.enemy.y <= 8 )
    {
      this.enemyYDirection = 1;
      this.enemyXDirection = this.enemyXDirection * Phaser.Math.RND.between(50, 120)/100
    }
    if (this.enemy.y >= 595 )
    {
      this.enemyYDirection = -1;
      this.enemyXDirection = this.enemyXDirection * Phaser.Math.RND.between(50, 120)/100
    }
  }
}
