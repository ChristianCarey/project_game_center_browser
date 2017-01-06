"use strict";

var cell = {

  totalCount: function() {
    return _model.totalCount;
  },

  _model: this.model


  //init: function() {
    //this.model.init();
  //}

}

cell.model = {

  totalCount: 0,

  newCells: function(n) {

  },

  _new: function(coords, contents) {
    return new this._constructor(coords, contents);
  },

  _constructor: function Cell(coords, contents) {
    this.id = cell.totalCount();
    this.coords = coords;
    this.contents = contents;
  }

};

