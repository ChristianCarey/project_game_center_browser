"use strict";

var foodController = {
  
  model: foodModel,

  view: foodView,

  grid: gridModel,

  init: function() {
    var x = CONFIG.food.startingX,
        y = CONFIG.food.startingY;
    this._placeFood(x, y)
  },

  newFood: function(oldFood) {
    var cell = this.grid.randomCell();
    while (this.grid.snakeOnCell(cell.x, cell.y) || (cell.x === oldFood.x && cell.y === oldFood.y)) {
      cell = this.grid.randomCell();
    }
    this._placeFood(cell.x, cell.y);
  },

  _placeFood: function(x, y) {
    var food = foodModel.placeFood(x,y);
    foodView.placeFood(food);
  }
}