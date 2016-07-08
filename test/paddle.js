const expect = require('chai').expect;
const paddle = require('../lib/paddle.js');

describe('paddle', function() {
  context('with default attributes', function() {
    var paddle = new Paddle({player: 1});

    it('should assign a player that is passed in', function() {
      expect.equal(paddle.player, 1);
    });
  });
});
