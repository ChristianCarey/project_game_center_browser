"use strict";

var snakeSegmentModel = {

  cell: cellModel,

  create: function(params) {
    return new this._constructor(params, this.cell);
  },

  // TODO this inherits from cell
  _constructor: function SnakeSegment(params, cell) {
    var cell = cell.create(
      params.x,
      params.y,
      "snake"
    );
    cell.head = params.head || false;
    cell.tail = params.tail || false;
    return cell;
  }
}