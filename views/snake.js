"use strict";

var snakeView = {

  grid: gridView,

  segments: [],

  init: function(controller) {
    this._attachEventHandlers(controller);
  },

  addSnake: function(head){
    var $head = $(head.getID());
    $head.addClass("snake");
    $head.addClass("tail");
  },

  _attachEventHandlers: function(controller) {
    $('body').keydown(function(e){
      var handlers = controller.eventHandlers;
      for (var handler in handlers) {
        var key = handlers[handler].key,
            callback = handlers[handler].callback;
        if (e.which === handlers[handler].key) {
          var snake = callback.call();
          snakeView.move(snake);
        }
      }  
    });   
  },

  move: function(snake) {
    var newHead = snake[0];
    var newTail = snake[snake.length - 1];
    this._removeTail();
    this._updateTail(newTail);
    this._addHead(newHead);
  },

  _removeTail: function() {
    var $tail = $('.tail');
    $tail.removeClass("snake"); 
  },

  _updateTail: function(tail) {
    var $tail = $(tail.getID());
    $tail.addClass("tail");
  },

  _head: function() {
    return this.segments[0];
  },

  _addHead: function(head) {
    var $head = $(head.getID());
    $head.addClass("snake");
  }
}