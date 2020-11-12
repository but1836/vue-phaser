import { Scene } from 'phaser'

export default class EndScene extends Scene {
  constructor () {
    super({ key: 'EndScene' })
  }

  preload () {}

  create () {
    // background
    // this.add.image(303, 299, 'bootBG')
  
    // Instruction text
    this.Summary = this.add.text(170, 200, 'Game Over! Your score was ' + this.game.scene.scenes[2].finalScore, {fontSize: '16px', fill: '#FFF'})
    this.StarOver = this.add.text(170, 300, 'Press Enter to play again', {fontSize: '16px', fill: '#FFF'})
    
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
  }
  
  update() {
    if (this.enterKey.isDown)
    {
      this.scene.start('BootScene')
    }
  }
}

