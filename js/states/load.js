var loadState = {

  //fontname is what it'll be called when you use it later, pathname is what it's called in the files
  //type should be fnt or xml, file extension for description stuff
  loadbitfont: function (fontname, pathname, type){
    game.load.bitmapFont(fontname, 'assets/fonts/'+pathname+'.png', 'assets/fonts/'+pathname+'.'+type);
  },

  preload: function() {

    //fonts
    this.loadbitfont("trebuchetms15", "trebuchet_15px", "fnt");

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
