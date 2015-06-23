var shape = {
  type: '',
  getType: function () { return this.type; }
}

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

//Other way of doing this
function shape() {
  this.type = '';
  this.getType = function (){ return this.type; }
}
function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = new shape();

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}
