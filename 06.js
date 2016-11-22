function Person(name){
  this.name = name;
}

Person.prototype.say = function(){
  console.log(this.name);
}


function Coder(name,age){
  Person.call(this,name);
  this.age = age;
}


Coder.prototype = new Person();


Coder.prototype.constructor = Coder;

var coder1 = new Coder ("killer",12);

console.log(Person.prototype.isPrototypeOf(coder1));
