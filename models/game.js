var gameModel = {
  
  snake: snakeModel,

  started: false,
  
  gameOver: function() {
    return this.snake.isDead();
  }
}