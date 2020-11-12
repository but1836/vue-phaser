import { Scene } from 'phaser'

import labBG from '@/game/assets/CCLabsBackground.png'
import bootBG from '@/game/assets/CCL.jpg'

import tommy from '@/game/assets/Tommy.png'
import david from '@/game/assets/David.png'
import manske from '@/game/assets/Manske.png'
import omar from '@/game/assets/Omar.png'
import ali from '@/game/assets/Ali.png'
import brett from '@/game/assets/BrettNButter.png'
import jeff from '@/game/assets/Jeff.png'
import katie from '@/game/assets/Katie.png'

import bravo from '@/game/assets/Bravo.png'

import jordanCamo from '@/game/assets/JordanCamo.png'
import jordanTiger from '@/game/assets/JordanTiger.png'
import jordanAxe from '@/game/assets/JordanAxe.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
    this.heroName = '';
    this.players = [];
  }

  preload () {
    this.load.image('labBG', labBG)
    this.load.image('bootBG', bootBG)    

    this.load.image('tommy', tommy)
    this.load.image('david', david)
    this.load.image('manske', manske)
    this.load.image('omar', omar)
    this.load.image('ali', ali)
    this.load.image('brett', brett)
    this.load.image('jeff', jeff)
    this.load.image('katie', katie)

    this.load.image('jordanCamo', jordanCamo)
    this.load.image('jordanTiger', jordanTiger)
    this.load.image('jordanAxe', jordanAxe)

    this.load.image('nugget', bravo)
  }

  create () {
    // Background
    this.add.image(303, 299, 'bootBG')
    this.add.rectangle(303, 299, 400, 400, 0xffffff, .9)

    // Game Title
    this.title = this.add.text(90, 20, 'BRAVO HUNTER', {fontSize: '60px', fill: '#FFF'})

    // Instruction text
    this.instructions = this.add.text(120, 550, 'Select your player, then press ENTER', {fontSize: '16px', fill: '#FFF'})

    // player choice sprites
    this.createPlayer(this.add.sprite(150, 220, 'tommy').setInteractive())
    this.createPlayer(this.add.sprite(250, 220, 'david').setInteractive())
    this.createPlayer(this.add.sprite(350, 220, 'manske').setInteractive())
    this.createPlayer(this.add.sprite(450, 220, 'omar').setInteractive())

    this.createPlayer(this.add.sprite(150, 380, 'ali').setInteractive())
    this.createPlayer(this.add.sprite(250, 380, 'brett').setInteractive())
    this.createPlayer(this.add.sprite(350, 380, 'jeff').setInteractive())
    this.createPlayer(this.add.sprite(450, 380, 'katie').setInteractive())

    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
  }

  createPlayer(sprite) {
    this.players.push(sprite);
    sprite.setScale(.6)
    sprite.alpha = 0.5
    sprite.on('pointerdown', () => {
      this.selectSprite(sprite)
    })
  }
  
  selectSprite(sprite) {
    this.heroName = sprite.texture.key
    this.players.forEach( player => player.alpha = .5)
    sprite.alpha = 1.0
  }
  
  update() {
    if (this.enterKey.isDown && !!this.heroName)
    {
      this.scene.start('EnemyScene')
    }
  }
}

