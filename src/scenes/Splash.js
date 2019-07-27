import Phaser from 'phaser'
import MainMenu from "./MainMenu";
import LoadGame from "./LoadGame";
import NewGame from "./NewGame";
import Tier1 from "./stages/Tier1";

class Splash extends Phaser.Scene {
    startKey = null;
    counter = 0;

    constructor() {
        super("bootGame")
    }

    preload() {
        this.scene.add('mainMenu', MainMenu, false);
        this.scene.add('loadGame', LoadGame, false);
        this.scene.add('newGame', NewGame, false);

        this.scene.add('tier1', Tier1, false);

        this.startKey = this.input.keyboard.addKey('ENTER')
    }

    create() {
        this.add.text(20,20, "Splash Screen")
    }

    update() {
        this.startKey.on('down', (event) => {
            if(this.counter === 0)
                this.scene.switch('mainMenu');

            this.counter++;
        })
    }
}

export default Splash;