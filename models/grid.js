"use strict";

var gridModel = {

  cell: cellModel,

  width: CONFIG.grid.width,

  height: CONFIG.grid.height,

  init:function(foodController) {
    this.foodController = foodController;
  },

  create: function(x, y) {
    x = x || this.width;
    y = y || this.height;
    var rows = new Array(y);
    for(var rowNum = 0; rowNum < y; rowNum++){
      rows[rowNum] = this._createRow(x, rowNum);
    }
    this.rows = rows;
    return this.rows;
  },

  addHead: function(head) {
    var cell = this._findCell(head.x, head.y)
    if (cell.contents === "food") {
      this.foodController.newFood();
    } 
    this._setCell(head);
  },

  placeFood(food) {
    var cell = this._findCell(food.x, food.y);
    cell.contents = "food";
  },

  foodOnCell: function(x, y) {
    var cell = this._findCell(x, y);
    return cell.contents === "food";
  },

  snakeOnCell: function(x, y) {
    var cell = this._findCell(x, y);
    return cell.contents === "snake";
  },

  removeCell: function(cell) {
    var cell = this._findCell(cell.x, cell.y),
        newCell = this.cell.create(cell.x, cell.y);
    this._setCell(newCell);
  },

  randomNonSnakeColumn: function() {
    return Math.floor(Math.random() * (this.width - 1));
  },

  randomNonSnakeRow: function() {
    return Math.floor(Math.random() * (this.height - 1));
  },

  _createRow: function(numCells, rowNum) {
    var row = new Array(numCells);
    for(var cellNum = 0; cellNum < numCells; cellNum++){
      row[cellNum] = this.cell.create(cellNum, rowNum);
    }
    return row;
  },

  _findCell: function(x, y) {
    return this.rows[y][x];
  },

  _setCell: function(cell) {
    this.rows[cell.y][cell.x] = cell;
  }
}