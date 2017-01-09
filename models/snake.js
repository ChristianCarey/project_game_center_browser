"use strict";

var snakeModel = {

  grid: gridModel,

  segmentModel: snakeSegmentModel,

  segments: [],

  create: function(){
    var head = this.segmentModel.create({
      x: CONFIG.snake.startingX,
      y: CONFIG.snake.startingY,
      head: true,
      tail: true
    });

    this.segments.push(head);

    this.grid.addSnake(head);
    return head;
  },

  moveUp: function() {
    var newHead = this._head().up();
    return this._move(newHead);
  },

  moveLeft: function() {
    var newHead = this._head().left();
    return this._move(newHead);
  },

  moveRight: function() {
    var newHead = this._head().right();
    return this._move(newHead);
  },

  moveDown: function() {
    var newHead = this._head().down();
    return this._move(newHead);
  },

  _move: function(newHead) {
    this._removeTail();
    this._addHead(newHead);
    return this.segments;
  },

  _removeTail: function() {
    this.segments.pop();
  },

  _head: function() {
    return this.segments[0];
  },

  _addHead: function(head) {
    this.segments.unshift(head);
  }
}