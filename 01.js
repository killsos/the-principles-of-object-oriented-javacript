var person1 = {
  _name:"thisisworld",
  get name(){
    console.log("Readig name");
    return this._name;
  },
  set name(value){
    console.log("Setting name");
    this._name = value;
  }
};

person1.name = "killsos";
