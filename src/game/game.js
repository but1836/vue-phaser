import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import EnemyScene from './scenes/EnemyScene'
import PlayScene from './scenes/PlayScene'
import EndScene from './scenes/EndScene'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: containerId,
    scene: [BootScene, EnemyScene, PlayScene, EndScene]
  })
}

export default launch
export { launch }
