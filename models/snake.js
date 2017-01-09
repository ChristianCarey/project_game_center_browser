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

    this.grid.addHead(head);
    return head;
  },

  moveUp: function() {
    if (this.heading !== "down") {
      this.heading = "up";
    }
  },

  moveLeft: function() {
    if (this.heading !== "right") {
      this.heading = "left";
    }
  },

  moveDown: function() {
    if (this.heading !== "up") {
      this.heading = "down";
    }
  },

  moveRight: function() {
    if (this.heading !== "left") {
      this.heading = "right";
    }
  },

  move: function() {
    var newHead;
    if (this.heading === "up") {
      newHead = this._newUp();
    } else if (this.heading === "left") {
      newHead = this._newLeft();
    } else if (this.heading === "right") {
      newHead = this._newRight();
    } else if (this.heading === "down") {
      newHead = this._newDown();
    }
    if (this._isInBounds(newHead)) {
      if (!this._isOnFood(newHead)) {
        this._removeTail(); 
      }
      if (!this._isOnSnake(newHead)) {
        this._addHead(newHead);
        return this.segments;
      } 
    } 
    this.dead = true;
    return false;
  },

  isDead: function() {
    return this.dead;
  },

  _isDeadly(head) {
    return !this._isInBounds(head) || this._isOnSnake(head);
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

  _isOnSnake(head) {
    return this.grid.snakeOnCell(head.x, head.y);
  },

  _isOnFood: function(head) {
    return this.grid.foodOnCell(head.x, head.y)
  },

  _removeTail: function() {
    var tail = this.segments.pop();
    this.grid.removeCell(tail);
  },

  _head: function() {
    return this.segments[0];
  },

  _addHead: function(head) {
    this.segments.unshift(head);
    this.grid.addHead(head);
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