//v1
//function logTenNumber(){
//	for(var i=0; i<10; i++){
//		console.log(i);
//	}
//}

//debugger;
//logTenNumbers();

//v2
//runWithDebugger(callback){
//	debugger;
//	callback();
//};

//runWithDebugger(function logTenNumber(){
//	for(var i=0; i<10; i++){
//		console.log(i);
//	}
//})

// runWithDebugger is enhancing the behavior of logTenNumbers function.

//v3
//Goal: runWithDebugger(sayHiTo, ['gordon']);
// runWithDebugger(sayFullName, ['gordon', 'zhu']);

function sayHi(){
	return 'hello!';
}

function sayHiTo(name) {
    return 'hi ' + name;
}

function sayFullName(first, last) {
    return first + ' '  + last;
}

function runWithDebugger(callback){
	debugger;
	return callback.apply(this, arguments[1]);
}


	

