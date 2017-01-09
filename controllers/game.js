"use strict";

var gameController = {

  gridController: gridController,
  
  snakeController: snakeController,

  foodController: foodController,

  model: gameModel,

  init: function() {
    this.gridController.init(foodController);
    this.snakeController.init();
    this.foodController.init();
  },

  play: async function() {
    if (!this.model.started) {
      var gameOver = false;

      this.model.started = true;

      while (!gameOver) {
        snakeController.move();
        await this.sleep(CONFIG.game.speed);
        gameOver = this.model.gameOver();
      }
    }
  },

  sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

