"use strict";

var gridController = {

  view: gridView,

  model: gridModel,

  init: function(){
    var grid = this.model.create();
    this.view.init(grid);
  }
}
