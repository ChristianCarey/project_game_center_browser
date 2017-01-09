"use strict";

var gridController = {

  view: gridView,

  model: gridModel,

  init: function(foodController){
    var grid = this.model.create();
    this.model.init(foodController);
    this.view.init(grid);
  }
}
