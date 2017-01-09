"use strict";

var foodModel = {

  cell: cellModel,

  grid: gridModel,

  placeFood: function(x, y) {
     var food = new this._contructor(x, y, this.cell)
     this.grid.placeFood(food);
     return food;
  },

  _contructor: function Food(x, y, cell) {
    var cell = cell.create(x, y, "food");
    return cell;
  }
}