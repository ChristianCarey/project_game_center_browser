"use strict";

var grid = {

  create: function(x, y) {
    var grid = this.model.create(x, y);
    this.view.create(grid);
  }

}

grid.model = {

  cellFactory: cell.model,

  create: function(x, y) {
    var rows = new Array(y);
    for(var rowNum = 0; rowNum < y; rowNum++){
      rows[rowNum] = this._createRow(x, y);
    }
    this.rows = rows;
    return this.rows;
  },

  _createRow: function(x, y) {
    var row = new Array(x);
    for(var cellNum = 0; cellNum < x; cellNum++){
      row[cellNum] = this.cellFactory.create({ x: x, y: y });
    }
    return row;
  }
}

grid.view = {

  cellFactory: cell.view,

  $container: $(".grid"),

  create: function(rows) {
    var vRows = rows.map(function(row){
      return this._createRow(row);
    }, this);
    this.$container.append(vRows);
  },

  _createRow: function(row) {
    return row.map(function(cell){
      return this.cellFactory.create(cell);
    }, this);
  }

}
