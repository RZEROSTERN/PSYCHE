import Phaser from 'phaser';


class LoadGame extends Phaser.Scene {
    backOption = null
    counter = 0;

    constructor() {
        super('loadGame')
    }

    preload() {
        this.backOption = this.input.keyboard.addKey('ESC')
    }

    create() {
        this.add.text(20, 50, "Load Game Screen. Press ESCAPE to return to Main Menu");
    }

    update() {
        this.backOption.on('down', (event) => {
            if(this.counter === 0)
                this.scene.switch('mainMenu');

            this.counter++;
            this.counter = 0;
        });
    }
}

export default LoadGame;