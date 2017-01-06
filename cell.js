"use strict";

var cell = {

  totalCount: function() {
    return this.model.totalCount;
  },

  create: function(coords, contents){
    var cell = this.model.create(coords, contents);
    return this.view.create(cell);
  }

  //init: function() {
    //this.model.init();
  //}

}

cell.model = {

  totalCount: 0,

  create: function(coords, contents) {
    return new this._constructor(coords, contents);
  },

  _constructor: function Cell(coords, contents) {
    this.id = cell.totalCount();
    this.coords = coords;
    this.contents = contents;
  }

};

cell.view = {

  create: function(cell) {
    return $("<div>").addClass("cell");
  }
}