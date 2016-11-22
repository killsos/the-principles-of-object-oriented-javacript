function Person (name){
  var  age = 25;
  this.name = name;
  this.addAge = function(){
    age++;
  }
  this.showAge = function(){
    console.log(age++);
  }
}


var person1 = new Person("js");
var person2 = new Person("node");

person1.addAge();

person2.showAge();

person1.showAge();
