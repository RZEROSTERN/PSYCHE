import Phaser from 'phaser';

class NewGame extends Phaser.Scene {
    backOption = null
    easy = null
    normal = null
    hard = null
    expert = null

    counter = 0;

    constructor() {
        super('newGame');
    }

    preload() {
        this.backOption = this.input.keyboard.addKey('ESC')

        this.easy = this.add.text(20, 80, "Easy: Freud is with you.");
        this.normal = this.add.text(20, 100, "Normal: You still believe in psicoanalysis.");
        this.hard = this.add.text(20, 120, "Hard: Hell yeah! Where's your science now?");
        this.expert = this.add.text(20, 140, "Popper: You'll need a Psychiatrist !!!");
    }

    create() {
        this.add.text(20, 50, "New Game Screen. Press ESCAPE to return to Main Menu or select one of these difficulties.");

        this.easy.setInteractive();

        this.easy.on('pointerdown', this.startEasy, this);
    }

    update() {
        this.backOption.on('down', (event) => {
            if(this.counter === 0)
                this.scene.switch('mainMenu');

            this.counter++;

            this.counter = 0;
        });
    }

    startEasy() {
        this.scene.switch('tier1');
    }
}

export default NewGame;