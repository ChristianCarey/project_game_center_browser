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
  
  // TODO make init function to find jquery objects

  create: function(rows) {
    var $grid = $(".grid"),
        rowHeight = $grid.height() / rows.length;
    rows.forEach(function(row){
      $grid.append(this._createRow(row, rowHeight));
    }, this);
  },

  _createRow: function(row, height) {
    var $row = $("<div>")
      .addClass("row")
      .height(height);
    row.forEach(function(cell){
       $row.append(this.cellFactory.create(cell));
    }, this);
    return $row;
  }
}
