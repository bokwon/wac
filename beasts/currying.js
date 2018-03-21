//var greetCurried = function(greeting) {
//  return function(name) {
//    console.log(greeting + ", " + name);
//  };
//};
//
//var greetHello = greetCurried("Hello");
//
//greetHello("Heidi");
//greetHello("Eddie");
//greetCurried("Hi there")("Howard"); 

// Closure example
// 1) Implicit closure
//var data = "My Data!";
//setTimeout(function(){
//	console.log(data);
//}, 3000);

// 2) Explict closure
function makeAdder(n){
	var inc = n;
	var sum = 0;
	return function add(){
		sum = sum + inc;
		return sum;
	};
}

var adder3 = makeAdder(3);

console.dir(adder3)