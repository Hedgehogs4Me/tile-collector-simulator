var util = {

  //fontname is what it'll be called when you use it later, pathname is what it's called in the files
  //type should be fnt or xml, file extension for description stuff
  loadBitFont: function (fontname, pathname, type){
    game.load.bitmapFont(fontname, 'assets/fonts/'+pathname+'.png', 'assets/fonts/'+pathname+'.'+type);
  },

  //This will need a whole lot of shit done to it later to calculate stuff
  resizeGame: function() {
    game.scale.setGameSize(window.innerWidth/scalefactor, window.innerHeight/scalefactor);
  },

  //Parameters:
  //initialValue: required, first member of your array
  //size: required, length of the final array, 1-based (like .length)
  //finalfunction: optional, function that takes one parameter and transforms it to give the next array value
  //  If not given, finalFunction acts like function(a){return a+1}
  //Why do languages not have this built in? This is easy and so useful!
  arrayGen: function(initialValue, size, finalFunction) {
    var generatedArray = [];
    for(var i=initialValue; generatedArray.length<size; i=finalFunction?finalFunction(i):i+1)
      generatedArray.push(i);
    return generatedArray
  },

  //This is in the order that things appear on the player sprite sheet.
  //The double-definition thing is pretty ugly, but the only reasonable alternative I can think of involves having a constructor and calling new directions()
  //eww
  //Could also get keys by values, but that's slow and requires some thinking to figure out accidental method-calling stuff
  direction: {
    right: 0,
    0: "right",
    down: 1,
    1: "down",
    left: 2,
    2: "left",
    up: 3,
    3: "up",

    //Rotate clockwise by deg degrees and return in type it came from (string returns string, num returns num)
    //Can be modified later if we want non-90 amounts.
    rotate: function(dir, deg) {
      //makes deg optional, default to 90
      deg = deg || 90;

      //Only defining this as a variable because it's used twice
      dirIsString = typeof dir == "string";

      //To rotate with math, strings must be turned into numbers
      if (dirIsString)
        dir = direction[dir];

      //This treats any non-multiple of 90 as rounding it down to the next multiple of 90, so if you add more directions, change this
      newDir = Math.floor(dir+deg/90);
      newDir = newDir<4 ? newDir : newDir-4;

      //If it's to be output as a string, get it from the num-indexed ones
      return dirIsString ? direction[dir] : dir;
    }
  }
}
