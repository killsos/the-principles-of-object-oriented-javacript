function Person(name){
  this.name = name;
}

Person.prototype.say = function(){
  console.log(this.name);
};


var person1 = new Person("KILL");

console.log(person1.prototype);  // 内部属性 外部无法通过显式调用到
