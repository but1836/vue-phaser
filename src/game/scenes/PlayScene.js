import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
    this.score = 0;
    this.heroSpeed = 2;
    this.collisionDist = 35;
    this.enemySpeed = 2;
  }

  create () {
    console.log("play this", this)
    console.log("this.game.scene.scenes[0].heroName", this.game.scene.scenes[0].heroName)
    // background
    this.add.image(303, 299, 'labBG')

    // hero
    this.hero = this.add.sprite(100, 150, this.game.scene.scenes[0].heroName)
    this.hero.setScale(.4)
    
    // nugget
    this.nugget = this.add.sprite(Phaser.Math.RND.between(20, 580), Phaser.Math.RND.between(20, 580), 'nugget')
    this.nugget.setScale(.4)

    // enemy
    this.enemy = this.add.sprite(500, 500, 'enemy')
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
  }

}
