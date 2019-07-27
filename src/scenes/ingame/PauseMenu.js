import Phaser from 'phaser';

class PauseMenu extends Phaser.Scene {
    resume = null

    constructor() {
        super("pauseMenu");
    }

    preload() {
        this.resume = this.input.keyboard.addKey('ENTER');
    }

    create() {
        this.add.text(50, 50, "PAUSE")
    }

    update() {
        this.resume.on('down', (event) => {
            this.scene.resume('tier1'); // Make it dynamic :)
            this.scene.stop();
        });
    }
}

export default PauseMenu;