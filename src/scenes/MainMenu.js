import Phaser from 'phaser'

class MainMenu extends Phaser.Scene {
    directionBundleKeys = null
    newGameOption = null
    loadGameOption = null
    fullScreenOption = null

    constructor() {
        super("mainMenu")
    }

    preload() {
        this.newGameOption = this.add.text(20, 20, "New Game");
        this.loadGameOption = this.add.text(20, 50, "Load Game");
        this.fullScreenOption = this.add.text(20, 80, "Play in Fullscreen");
    }

    create() {
        this.newGameOption.setInteractive();
        this.newGameOption.on('pointerdown', this.newGame, this);

        this.loadGameOption.setInteractive();
        this.loadGameOption.on('pointerdown', this.loadGame, this);

        this.fullScreenOption.setInteractive();
        this.fullScreenOption.on('pointerdown', this.goFullScreen, this);
    }

    update() {

    }

    newGame() {
        this.scene.switch('newGame');
    }

    loadGame() {
        this.scene.switch('loadGame');
    }

    goFullScreen() {
        this.scale.toggleFullscreen();

        if(!this.scale.isFullscreen) {
            this.fullScreenOption.text = "Leave Fullscreen"
        } else {
            this.fullScreenOption.text = "Play in Fullscreen"
        }
    }
}

export default MainMenu;