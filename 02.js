function Person(name){
  this.name = name;
}

var person1 = new Person("kill");
var person2 = new Person("sos");


console.log(person1.constructor === Person); // true
