var bootState = {

  preload: function() {
    //assets we'll use in the loading screen
    util.loadBitFont("trebuchetms15", "trebuchet_15px", "fnt");
  },

  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Not that it really matters for us, but this 100% ensures no stretching
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.updateLayout();

    game.state.start("load");
  }

};
