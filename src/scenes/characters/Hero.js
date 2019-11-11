import Phaser from 'phaser'

class Hero extends Phaser.Physics.Arcade.Sprite {
    scene = null
    player = null
    platforms = null
    health = 100
    lives = 3
    accelleration = 600
    isJumping = false
    jumpTimer = 0

    constructor(config) {
        super(config.scene, config.x, config.y, config.key, config.platforms);

        this.scene = config.scene;
        this.platforms = config.platforms;

        this.player = this.scene.physics.add.sprite(config.x, config.y, config.key);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.player, this.platforms);
    }

    update(keys) {
        let input = {
            left: keys.left.isDown,
            right: keys.right.isDown,
            down: keys.down.isDown,
            jump: keys.jump.isDown || keys.jump2.isDown,
            fire: keys.fire.isDown
        };

        if(input.left) {
            this.player.x -= 8;
        } else if(input.right) {
            this.player.x += 8;
        } else if(input.down) {
            console.log("Crouch")
        } else if(input.jump && (!this.isJumping)) {
            this.jump();
        } else if(input.fire) {
            console.log("PewPewPew")
        }
    }

    jump() {
        this.isJumping = true;
        this.player.setVelocityY(-200);
    }

    die() {

    }
}

export default Hero;