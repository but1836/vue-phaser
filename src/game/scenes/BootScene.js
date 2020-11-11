import { Scene } from 'phaser'

import labBG from '@/game/assets/CCLabsBackground.png'
import tommy from '@/game/assets/Tommy.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('labBG', labBG)
    this.load.image('hero', tommy)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
