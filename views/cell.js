"use strict";

var cellView = {
  create: function(cell) {
    return $("<div>")
      .addClass("cell")
      .attr("id", cell.x.toString() + cell.y);
  },

  update: function(cell) {
    var $cell = $(cell.getID());
    $cell.removeClass("empty");
    $cell.removeClass("snake");
    $cell.removeClass("head");
    $cell.removeClass("tail");
    $cell.removeClass("food");
    $cell.addClass(cell.contents)
  }
}