import Game from '../models/Game.js';
const assert = require('assert');

describe ('Game', function (){

  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('should end the game when a the value of 3 squares equals a value in a win array', function (){
    const expected = "Game Over";
    assertStrictEqual(game.forTheWin, expected);
  })
})
