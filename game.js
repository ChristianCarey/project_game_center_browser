
var game = {

  play: function() {
    this.setup();
  },

  setup: function() {
    this.setupGrid();
    this.addFood();
    this.addSnake();
  },

  setupGrid: function() {
    this.grid.init();
    this.grid.create(10, 10);
  },

  addFood: function() {
    //TODO
  },

  addSnake: function() {
    //TODO
  },

  grid: grid


};

