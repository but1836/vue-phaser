import { Scene } from 'phaser'

import labBG from '@/game/assets/CCLabsBackground.png'
import titleBG from '@/game/assets/CCL.jpg'
import tommy from '@/game/assets/Tommy.png'
import david from '@/game/assets/David.png'
import manske from '@/game/assets/Manske.png'
import omar from '@/game/assets/Omar.png'
import bravo from '@/game/assets/Bravo.png'
import jordan from '@/game/assets/Jordan.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
    this.heroName = '';
    this.players = [];
  }

  preload () {
    this.load.image('labBG', labBG)
    this.load.image('titleBG', titleBG)
    this.load.image('tommy', tommy)
    this.load.image('david', david)
    this.load.image('manske', manske)
    this.load.image('omar', omar)
    this.load.image('nugget', bravo)
    this.load.image('enemy', jordan)
  }

  create () {
    console.log("boot this", this)
    // Background
    this.add.image(303, 299, 'titleBG')
    this.add.rectangle(303, 299, 400, 400, 0xffffff, .9)

    // Instruction text
    this.instructions = this.add.text(150, 50, 'Select your player, then press ENTER', {fontSize: '16px', fill: '#FFF'})

    // player choice sprites
    this.tommy = this.add.sprite(200, 200, 'tommy').setInteractive()
    this.players.push(this.tommy);
    this.tommy.alpha = 0.6
    this.tommy.on('pointerdown', () => {
      this.selectSprite(this.tommy)
    })

    this.david = this.add.sprite(400, 200, 'david').setInteractive()
    this.players.push(this.david);
    this.david.alpha = 0.6
    this.david.on('pointerdown', () => {
      this.selectSprite(this.david)
    })

    this.manske = this.add.sprite(200, 400, 'manske').setInteractive()
    this.players.push(this.manske);
    this.manske.alpha = 0.6
    this.manske.on('pointerdown', () => {
      this.selectSprite(this.manske)
    })

    this.omar = this.add.sprite(400, 400, 'omar').setInteractive()
    this.players.push(this.omar);
    this.omar.alpha = 0.6
    this.omar.on('pointerdown', () => {
      this.selectSprite(this.omar)
    })

    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
  }
  
  selectSprite(sprite) {
    this.heroName = sprite.texture.key
    this.players.forEach( player => player.alpha = .6)
    sprite.alpha = 1.0
  }
  
  update() {
    if (this.enterKey.isDown)
    {
      this.scene.start('PlayScene')
    }
  }
}

