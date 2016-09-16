//temporary, eventually make it dependent on window size
var scalefactor = 4;

//Canvas is unfortunately necessary for nearest-neighbour
//Everything past that is defaults except for the last false, which is anti-aliasing
var game = new Phaser.Game(window.innerWidth/scalefactor, window.innerHeight/scalefactor, Phaser.CANVAS, null, null, false, false);

//all states go here before starting.
game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("play", playState);

//true, false are defaults, everything past them is for passing to init
//game.state.start("boot", true, false, "assets/world.json");
//The above is what a lot of examples use, but I don't know why it's
//called there and not just... when needed. For now, this:
game.state.start("boot");

window.addEventListener('resize', util.resizeGame, true);
