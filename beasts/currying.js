var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");

greetHello("Heidi");
greetHello("Eddie");
greetCurried("Hi there")("Howard"); 