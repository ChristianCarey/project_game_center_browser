"use strict";

$(document).ready(function(){
  gameController.init();
  $('body').keydown(function(){
    gameController.play();
  });
});
