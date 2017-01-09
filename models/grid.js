"use strict";

var gridModel = {

  cell: cellModel,

  width: CONFIG.grid.width,

  height: CONFIG.grid.height,

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

  addSnake: function(head) {
    var cell = this._findCell(head.x, head.y)
    cell.contents = head;
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
  }
}