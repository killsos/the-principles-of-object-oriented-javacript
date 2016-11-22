var person = (function(){
    var age = 25;  // private data
    return {
      getAge: function(){
        return 25;
      },
      addAge: function(){
        age++;
      }
    };
}())
