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

  newFood: function() {
    var x = this.grid.randomNonSnakeColumn(),
        y = this.grid.randomNonSnakeRow();
    this._placeFood(x, y);
  },

  _placeFood: function(x, y) {
    var food = foodModel.placeFood(x,y);
    foodView.placeFood(food);
  }
}