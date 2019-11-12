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

    constructor(config) {
        super(config.scene, config.x, config.y, config.key, config.platforms);

        this.scene = config.scene;
        this.platforms = config.platforms;

        this.player = this.scene.physics.add.sprite(config.x, config.y, config.key);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.player, this.platforms);

        this.scene.playerShots = this.scene.physics.add.group({
            defaultKey: 'shot',
            maxSize: 10,
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

        if(input.left) {
            this.player.x -= 6;
        } else if(input.right) {
            this.player.x += 6;
        } else if(input.down) {
            console.log("Crouch")
        } else if(input.jump && (!this.isJumping)) {
            this.jump();
        } else if(input.fire) {
            this.shoot();
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
        this.player.setVelocityY(-200);
    }

    die() {
        console.log("OUCH !!!");
    }

    shoot() {
        let shot = this.scene.playerShots.get(this.player.x, this.player.y);

        if(shot) {
            shot.body.reset(this.player.x, this.player.y);
            shot.setActive(true);
            shot.setVisible(true);
            shot.body.velocity.x = 450;
            shot.body.setAllowGravity(false);
        }
    }
}

export default Hero;