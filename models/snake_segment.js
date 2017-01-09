"use strict";

var snakeSegmentModel = {

  cell: cellModel,

  create: function(params) {
    return new this._constructor(params, this.cell);
  },

  _constructor: function SnakeSegment(params, cell) {
    var cell = cell.create(
      params.x,
      params.y,
      "snake"
    );
    cell.head = params.head || false;
    cell.tail = params.tail || false;
    return cell;
  },

  newUp: function(head) {
    var newHead = this._copy(head);
    newHead.y--;
    return newHead;
  },

  newLeft: function(head) {
    var newHead = this._copy(head);
    newHead.x--;
    return newHead;
  },

  newDown: function(head) {
    var newHead = this._copy(head);
    newHead.y++;
    return newHead;
  },

  newRight: function(head) {
    var newHead = this._copy(head);
    newHead.x++;
    return newHead;
  },

  _copy: function(segment) {
    return this.create({
      x: segment.x,
      y: segment.y,
      head: segment.head,
      tail: segment.tail
    })
  }
}