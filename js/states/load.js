var loadState = {

  fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
    //put a try/catch in this someday
    this.loadamount.setText(progress+"%");
  },

  create: function(){
    game.load.onFileComplete.add(fileComplete, this);
    this.loadamount = game.add.bitmapText(10, 10, "trebuchetms15", "Loading...", 45);
  },

  preload: function() {

    //fonts
    //none yet, see boot.js

    game.load.spritesheet('player', 'assets/images/player.png', 16, 24);

    //temporarily only 10 tiles, first one being blank (void)
    game.load.spritesheet('tiles', 'assets/images/tiles.png', 16, 16, 10);
  },

  create: function(){
    //Skipping right to the game for now, no menu.
    //But this is where a menu would go once we're ready to add that in
    game.state.start("play");
  }

};
