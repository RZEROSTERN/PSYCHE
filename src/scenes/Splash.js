import Phaser from 'phaser'

class Splash extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    create() {
        this.add.text(20,20, "Loading game...")
    }

    update() {
        
    }
}

export default Splash;