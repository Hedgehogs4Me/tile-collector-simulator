var controls;

var playState = {

  create: function() {
    userControls.setPlayControls();
    //controls = userControls.inputDevice;
    controls = userControls.keyboard;
    this.player = game.add.sprite(0,0,'player');
    //basically add more stuff like that, adding sprites from preloaded images, that sort of deal
    //may have to move the keyboard thing somewhere else if we want to be able to start with the keyboard, though

    //Player animations: change these if reorganizing player spritesheet asset
    //Calculations not really necessary, but are there for clarity (16 is row length)
    this.player.animations.add("down", util.arrayGen(1+16*util.direction.down, 8), 20, true);
    this.player.animations.add("up", util.arrayGen(1+16*util.direction.up, 8), 20, true);
    this.player.animations.add("right", util.arrayGen(1+16*util.direction.right, 8), 20, true);
    this.player.animations.add("left", util.arrayGen(1+16*util.direction.left, 8), 20, true);

    //Enable collisions and stuff in case we ever want to do that.
    game.physics.arcade.enable(this.player);
    //Set initial player frame down-idle.
    this.player.frame = 16*util.direction.down;

    //Made-up stuff I put in
    //this.player._walkingSpeed = 2;
    this.player._direction = "down";

    game.stage.backgroundColor = '#CC0000';
    this.text = game.add.bitmapText(10, 10, "trebuchetms15", "Text", 15);
  },

  update: function() {
    //Eventually we're going to need sub-states that stay within the play state but change how input is taken
    //(and stuff like whether ants travel)
    //For example, things will be different when the menu is open.

    //this.player.frame = 0;
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    if (controls.up.isDown) {  //up is down, right is wrong! Anarchy!
      this.player._direction = "up";
      this.player.body.velocity.y = -80;
    } else if (controls.down.isDown) {
      this.player._direction = "down";
      this.player.body.velocity.y = 80;
    }
    if (controls.left.isDown) {
      this.player._direction = "left";
      this.player.body.velocity.x = -80;
    } else if (controls.right.isDown) {
      this.player._direction = "right";
      this.player.body.velocity.x = 80;
    }

    if (this.player.body.velocity.x != 0 || this.player.body.velocity.y != 0) {
      this.player.animations.play(this.player._direction);
    } else {
      this.player.animations.stop();
      this.player.frame = 16*util.direction[this.player._direction];
    }

    this.text.setText('ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890\nOwen Greenberg (Hedgehogs4Me)\nAsbjørn Apeland (aude)\n-=_+{}[];\'\\:"|,./<>?`~!@#$%^&*()\nx: ' + Math.round(game.input.x) + ' y: ' + Math.round(game.input.y));
  }

};
