var text;

var playState = {

  create: function() {
    this.keyboard = game.input.keyboard;
    //basically add more stuff like that, adding sprites from preloaded images, that sort of deal
    //may have to move the keyboard thing somewhere else if we want to be able to start with the keyboard, though

    game.stage.backgroundColor = '#CC0000';
    text = game.add.bitmapText(10, 10, "trebuchetms15", "Text", 15);
  },

  update: function() {
    text.setText('ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890\nOwen Greenberg (Hedgehogs4Me)\nAsbjørn Apeland (aude)\n-=_+{}[];\'\\:"|,./<>?`~!@#$%^&*()\nx: ' + Math.round(game.input.x) + ' y: ' + Math.round(game.input.y));
  }

};
