import Phaser from 'phaser';
import Hero from '../characters/Hero'

class Tier1 extends Phaser.Scene {
    pause = null
    hero = null
    keys = {}

    constructor() {
        super("tier1");
    }

    preload() {
        this.pause = this.input.keyboard.addKey('ESC');
        this.load.spritesheet('hero', require('../../assets/test/hero-test.png'), { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.add.text(20,20,"Tier 1... START !!! Press ESCAPE for PAUSE");

        this.keys = {
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            jump2: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            fire: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J)
        };

        this.hero = new Hero({
            scene: this,
            key: 'hero',
            x: 16 * 6,
            y: this.sys.game.config.height - 48 - 48
        });
    }

    update() {
        this.hero.update(this.keys)

        this.pause.on('down', (event) => {
            this.scene.launch('pauseMenu');
            this.scene.pause();
        });
    }

    tileColission(sprite, tile) {

    }
}

export default Tier1;