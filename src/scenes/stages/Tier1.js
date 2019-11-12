import Phaser from 'phaser';
import Hero from '../characters/Hero';
import Debug from '../../config/debug';

class Tier1 extends Phaser.Scene {
    pause = null
    hero = null
    platforms = null
    keys = {}
    playerShots = null;

    constructor() {
        super("tier1");
    }

    preload() {
        this.pause = this.input.keyboard.addKey('ESC');

        this.load.spritesheet('hero', require('../../assets/test/hero-test.png'), { frameWidth: 32, frameHeight: 32 });
        this.load.image('ground', require('../../assets/test/platform-test.png'));
        this.load.image('tiles', require('../../assets/test/testtile_1x1.png'));
        this.load.image('shot', require('../../assets/test/playershoottest.png'));
        this.load.tilemapTiledJSON('map', require('../../assets/test/tilemaps/tier1test.json'));
    }

    create() {
        // this.add.text(20,20,"Tier 1... START !!! Press ESCAPE for PAUSE");

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('testtile_1x1', 'tiles');

        this.platforms = map.createStaticLayer('Platforms', tileset, 0, 200);

        this.platforms.setCollisionByExclusion(-1, true);

        this.keys = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
            jump2: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            fire: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J)
        };

        this.hero = new Hero({
            scene: this,
            key: 'hero',
            x: 16 * 6,
            y: this.sys.game.config.height - 128,
            platforms: this.platforms
        });
    }

    update(time, delta) {
        this.hero.update(this.keys);

        this.pause.on('down', (event) => {
            this.scene.launch('pauseMenu');
            this.scene.pause();
        });
    }

    tileColission(sprite, tile) {

    }
}

export default Tier1;