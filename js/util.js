var util = {

  //fontname is what it'll be called when you use it later, pathname is what it's called in the files
  //type should be fnt or xml, file extension for description stuff
  loadBitFont: function (fontname, pathname, type){
    game.load.bitmapFont(fontname, 'assets/fonts/'+pathname+'.png', 'assets/fonts/'+pathname+'.'+type);
  },

  //This will need a whole lot of shit done to it later to calculate stuff
  resizeGame: function() {
    game.scale.setGameSize(window.innerWidth/scalefactor, window.innerHeight/scalefactor);
  }
}
