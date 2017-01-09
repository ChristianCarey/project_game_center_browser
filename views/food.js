"use strict";

var foodView = {

  placeFood: function(food) {
    var $food = $(food.getID());
    $food.addClass('food');
  }
}