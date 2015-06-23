function Animal(color, legs){
  this.color= color;
  this.numOfLegs= legs;
}

function Cat(){
  this.meows = true;
  this.type = 'Cat';
}

Cat.prototype = new Animal('black', 4);

var tom = new Cat();
