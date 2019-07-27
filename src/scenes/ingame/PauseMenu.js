import Phaser from 'phaser';

class PauseMenu extends Phaser.Scene {
    constructor() {
        super("pauseMenu");
    }

    create() {
        this.add.text(this.screen.width / 2, this.screen.height / 2, "PAUSE")
    }

    update() {
        this.backOption.once('down', (event) => {
            this.scene.resume('tier1'); // Make it dynamic :)
            this.scene.stop();
        });
    }
}

export default PauseMenu;