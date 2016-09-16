var loadState = {

  fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
    //put a try/catch in this someday
    this.loadamount.setText(progress+"%");
  },

  preload: function() {
    game.load.onFileComplete.add(this.fileComplete, this);
    this.loadamount = game.add.bitmapText(10, 10, "trebuchetms15", "Loading...", 45);

    //I guess we're loading stuff here? I have no idea what I'm doing

    //fonts
    //none yet, see boot.js

    game.load.spritesheet('player', 'assets/images/player.png', 16, 24);

    //temporarily only 10 tiles, first one being blank (void)
    game.load.spritesheet('tiles', 'assets/images/tiles.png', 16, 16, 10);
  },

  create: function(){

    //When we have a menu state, make this go there.
    game.state.start("play");
  }

};
