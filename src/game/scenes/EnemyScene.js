import { Scene } from 'phaser'

export default class EnemyScene extends Scene {
  constructor () {
    super({ key: 'EnemyScene' })
    this.enemyName = '';
    this.enemies = [];
  }

  preload () {}

  create () {
    // Background
    this.add.image(303, 299, 'bootBG')
    this.add.rectangle(303, 299, 400, 400, 0xffffff, .9)

    // Game Title
    this.title = this.add.text(90, 20, 'BRAVO HUNTER', {fontSize: '60px', fill: '#FFF'})

    // Instruction text
    this.instructions = this.add.text(120, 550, 'Select your rival, then press ENTER', {fontSize: '16px', fill: '#FFF'})
  
    this.createEnemy(this.add.sprite(180, 300, 'jordanCamo').setInteractive())
    this.createEnemy(this.add.sprite(300, 300, 'jordanTiger').setInteractive())
    this.createEnemy(this.add.sprite(420, 300, 'jordanAxe').setInteractive())

    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
  }

  createEnemy(sprite) {
    this.enemies.push(sprite);
    sprite.setScale(.6)
    sprite.alpha = 0.5
    sprite.on('pointerdown', () => {
      this.selectSprite(sprite)
    })
  }
  
  selectSprite(sprite) {
    this.enemyName = sprite.texture.key
    this.enemies.forEach( enemy => enemy.alpha = .5)
    sprite.alpha = 1.0
  }
  
  update() {
    if (this.enterKey.isDown && !!this.enemyName)
    {
      this.scene.start('PlayScene')
    }
  }
}

