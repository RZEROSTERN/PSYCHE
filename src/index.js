import Phaser from 'phaser';
import config from './config/config';

import Splash from './scenes/Splash';
import MainMenu from './scenes/MainMenu';

import './style.scss';

class Game extends Phaser.Game {
    constructor(GameConfig) {
        super(GameConfig);
        this.scene.add('splash', Splash, true);
        this.scene.add('mainMenu', MainMenu);
    }
}

window.game = new Game(config);