//The user will be able to set these eventually (at least, the playState controls)
//This is kept as its own global object because it can be used in all states
var userControls = {

  //Defines the type of input
  inputDevice: function() { return this.keyboard },

  //Gets filled by game later via Phaser.Keyboard.addKey() and Phaser.Keyboard.addKeys()
  keyboard: {},

  //Later support mouse click-to-move stuff, touchscreen, maybe gamepads, etc
  //Would reaaaally like to have hybrid control systems (like mouse/keyboard)
  //But how do I implement this in a way that can be changed?
  //Maybe have a keyboard/mouse hybrid option with the mouse hardcoded and keyboard controls changeable?

  //Populate keyboard with default play state controls
  //Note: if controls will be user-definable through the menu state, this function will have to be rewritten to reflect that!
  setPlayControls: function() {
    this.keyboard = game.input.keyboard.addKeys( {
      'up': Phaser.KeyCode.W,
      'down': Phaser.KeyCode.S,
      'left': Phaser.KeyCode.A,
      'right': Phaser.KeyCode.D,
      'prev': Phaser.KeyCode.Q,
      'next': Phaser.KeyCode.E,
      'use': Phaser.KeyCode.X,
      'menu': Phaser.KeyCode.SPACE
    });
  }
}
