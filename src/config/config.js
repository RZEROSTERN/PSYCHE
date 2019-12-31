export default {
    type: Phaser.AUTO,
    gameWidth: 1280,
    gameHeight: 720,
    backgroundColor: 0x909090,
    localStorageName: 'project-iv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 704
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 700,
                x: 0
            },
        }
    }
}