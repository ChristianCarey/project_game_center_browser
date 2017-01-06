"use strict";

var grid = {

  create: function(x, y) {
    var grid = this.model.create(x, y);
    return this.view.create(grid);
  },

  cellFactory: cell
}

grid.model = {

  create: function(x, y) {
    for(var rowNum = 0; rowNum < y; rowNum++){
      this._createRow(x, y);
    }
  },

  _createRow: function(x, y) {
    var row = new Array(x);
    for(var cellNum = 0; cellNum < x; cellNum++){
      row[cellNum] = this.cellFactory.create({
        x: x,
        y: y
      })
    }
    return row;
  }
}

grid.view = {

}