import Phaser from 'phaser'

class Hero extends Phaser.Physics.Arcade.Sprite {
    scene = null;
    player = null;
    platforms = null;
    health = 100;
    lives = 3;
    accelleration = 600;
    isJumping = false;
    jumpTimer = 0;
    nextFire = 0;

    movingStatus = "";

    constructor(config) {
        super(config.scene, config.x, config.y, config.key, config.platforms);

        this.scene = config.scene;
        this.platforms = config.platforms;

        this.player = this.scene.physics.add.sprite(config.x, config.y, config.key);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(false);

        this.scene.playerShots = this.scene.physics.add.group({
            defaultKey: 'shot',
            maxSize: 50,
        });

    }

    update(keys) {
        let input = {
            left: keys.left.isDown,
            right: keys.right.isDown,
            down: keys.down.isDown,
            jump: keys.jump.isDown || keys.jump2.isDown,
            fire: Phaser.Input.Keyboard.JustDown(keys.fire)
        };

        this.player.body.setVelocityX(0);

        if(input.left) {
            this.player.body.setVelocityX(-400);
            this.movingStatus = "LEFT";
        } else if(input.right) {
            this.player.body.setVelocityX(400);
            this.movingStatus = "RIGHT";
        } else if(input.down) {
            console.log("Crouch")
        }

        if(input.jump && (!this.isJumping)) {
            this.jump();
        }

        if(input.fire) {
            if(this.movingStatus === "LEFT") {
                this.shoot(true);
            } else {
                this.shoot(false);
            }
        }

        if(this.player.body.blocked.down) {
            this.isJumping = false;
        }

        this.scene.playerShots.children.each(function(b) {
            console.log(b.active);
            if (b.active) {
                if (b.x > this.sys.game.config.width || b.y > this.sys.game.config.height) {
                    b.setActive(false);
                    b.setVisible(false);
                }
            }
        }.bind(this.scene));

    }

    jump() {
        this.isJumping = true;
        this.player.setVelocityY(-400);
    }

    die() {
        console.log("OUCH !!!");
    }

    shoot(inverse) {
        let shot = this.scene.playerShots.get(this.player.x, this.player.y);

        if(shot) {
            shot.body.reset(this.player.x, this.player.y);
            shot.setActive(true);
            shot.setVisible(true);

            if(!inverse) {
                shot.body.velocity.x = 500;
            } else {
                shot.body.velocity.x = -500;
            }

            shot.body.setAllowGravity(false);
        }
    }
}

export default Hero;