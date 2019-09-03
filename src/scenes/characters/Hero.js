import Phaser from 'phaser'

class Hero extends Phaser.GameObjects.Sprite {
    scene = null
    health = 100
    lives = 3
    accelleration = 600
    isJumping = false
    jumpTimer = 0

    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this)
        console.log("Hero created")
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
            console.log("Go left !!!")
        } else if(input.right) {
            console.log("Go right !!!")
        } else if(input.down) {
            console.log("Crouch")
        } else if(input.jump/*&& (!this.isJumping || this.jumpTimer > 0)*/) {
            console.log("I believe I can fly")
        } else if(input.fire) {
            console.log("PewPewPew")
        }
    }

    jump() {

    }

    die() {

    }
}

export default Hero;