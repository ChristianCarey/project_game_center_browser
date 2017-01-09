"use strict";

var snakeModel = {

  grid: gridModel,

  segment: snakeSegmentModel,

  segments: [],

  create: function(){
    var head = this.segment.create({
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
    var newHead = this._newUp();
    return this._move(newHead);
  },

  moveLeft: function() {
    var newHead = this._newLeft();
    return this._move(newHead);
  },

  moveDown: function() {
    var newHead = this._newDown();
    console.log(newHead);
    return this._move(newHead);
  },

  moveRight: function() {
    var newHead = this._newRight();
    return this._move(newHead);
  },

  _move: function(newHead) {
    if (this._isInBounds(newHead)) {
      this._removeTail();
      this._addHead(newHead);
      return this.segments;
    } else {
      return false;
    }
  },

  _isInBounds(head) {
    var inBounds = true;
    if (head.x < 0 || head.x > this.grid.width - 1) {
      inBounds = false;
    }
    if (head.y < 0 || head.y > this.grid.height - 1) {
      inBounds = false;
    }
    return inBounds;
  },

  _removeTail: function() {
    this.segments.pop();
  },

  _head: function() {
    return this.segments[0];
  },

  _addHead: function(head) {
    this.segments.unshift(head);
  },

  _newUp: function() {
    return this.segment.newUp(this._head());
  },

  _newLeft: function() {
    return this.segment.newLeft(this._head());
  },

  _newDown: function() {
    return this.segment.newDown(this._head());
  },

  _newRight: function() {
    return this.segment.newRight(this._head());
  }
}