export default {
    gameWidth: 800,
    gameHeight: 600,
    backgroundColor: 0x000000,
    localStorageName: 'project-iv',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height:720
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500,
                debug: true
            }
        }
    }
}