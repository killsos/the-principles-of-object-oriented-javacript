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

// 为了保证构造函数正确性 需要修改原型的constructor

//Coder.prototype.constructor = Coder;

var beijing = new Coder("killsos",12);

// console.log(beijing.constructor);  // Coder

// 原型修改后 congstructor

console.log(beijing.constructor);  // Person
