"use strict";

var foodController = {
  
  model: foodModel,

  view: foodView,

  init: function() {
    var x = CONFIG.food.startingX;
    var y = CONFIG.food.startingY;
    this._placeFood(x, y)
  },

  _placeFood: function(x, y) {
    var food = foodModel.placeFood(x,y);
    foodView.placeFood(food);
  }
}