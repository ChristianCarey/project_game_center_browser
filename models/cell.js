"use strict";

var cellModel = {

  totalCount: 0,

  create: function(x, y, contents) {
    this.totalCount += 1;
    return new this._constructor(x, y, contents);
  },

  _constructor: function Cell(x, y, contents) {
    this.x = x;
    this.y = y;
    this.contents = contents;
    this.getID = function() {
      return "#" + this.x + this.y;
    };
  }
};