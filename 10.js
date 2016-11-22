var person = (function(){
    var age = 25;  // private data

    function Innerperson(name){
      this.name = name;
    }

    Innerperson.prototype.addAge = function(){
      age++;
    }

    return Innerperson;
}())
