//v1
function logTenNumber(){
	for(var i=0; i<10; i++){
		console.log(i);
	}
}

debugger;
logTenNumbers();

//v2
runWithDebugger(callback){
	debugger;
	callback();
};

runWithDebugger(function logTenNumber(){
	for(var i=0; i<10; i++){
		console.log(i);
	}
})

// runWithDebugger is enhancing the behavior of logTenNumbers function.

//v3
//Goal: runWithDebugger(sayHiTo, ['gordon']);
// runWithDebugger(sayFullName, ['gordon', 'zhu']);

function sayHi(){
	console.log('hello!');
}

function sayHiTo(name) {
  console.log('hi ' + name);
}

function sayFullName(first, last) {
  console.log(first + ' '  + last);
}

function runWithDebugger(callback){
	debugger;
	callback.apply(this, arguments[1]);
}

function runWithDebugger(callback){
	return arguments;
}

	

