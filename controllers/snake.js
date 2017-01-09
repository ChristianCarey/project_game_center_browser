var snakeController = {

  model: snakeModel,
  view: snakeView,

  init: function() {
    var head = this.model.create();
    this.view.init(this);
    this.view.addSnake(head);
  },

  move: function() {
    var snake = this.model.move();
    if (snake) {
      this.view.move(snake);
    }
    return snake;
  },

  eventHandlers: {

    up: { 
      key: 87, // w
      callback: function(){
        return snake = snakeController.model.moveUp();
      }
    },

    left: {
      key: 65, // a
      callback: function(){
        return snake = snakeController.model.moveLeft();
      }
    },

    down: {
      key: 83, // s
      callback: function(){
        return snake = snakeController.model.moveDown();
      }
    },

    right: {
      key: 68, // d
      callback: function(){
        return snake = snakeController.model.moveRight();
      }
    }
  },
}