import Phaser from 'phaser';

class Tier1 extends Phaser.Scene {
    pause = null

    constructor() {
        super("tier1");
    }

    preload() {
        this.pause = this.input.keyboard.addKey('ESC');
    }

    create() {
        this.add.text(20,20,"Tier 1... START !!!")
    }

    update() {
        this.pause.once('down', (event) => {
            this.scene.launch('pauseMenu');
            this.scene.pause();
        });
    }
}

export default Tier1;