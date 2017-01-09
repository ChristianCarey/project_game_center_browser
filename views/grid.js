"use strict";

var gridView = {

  cell: cellView,

  init: function(grid) {
    this.$container = $(".grid");
    this._create(grid);
  },

  _create: function(grid) {
    var rowHeight = this.$container.height() / grid.length;
    grid.forEach(function(row){
      this.$container.append(this._createRow(row, rowHeight));
    }, this);
  },

  _createRow: function(row, height) {
    var $row = $("<div>")
      .addClass("row")
      .height(height);
    row.forEach(function(cell){
       $row.append(this.cell.create(cell));
    }, this);
    return $row;
  }
}
