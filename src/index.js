import Phaser from 'phaser';
import config from './config/config';

import Splash from './scenes/Splash';

import './style.scss';
import MainMenu from "./scenes/MainMenu";

class Game extends Phaser.Game {
    constructor(GameConfig) {
        super(GameConfig);
        this.scene.add('splash', Splash, true);
    }
}

window.game = new Game(config);
