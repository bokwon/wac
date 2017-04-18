//IIFE(Immediately Invoked Function Expression) - It is used to hide variables from the rest of the program and immediately run the function.

function accountingJS(root, undefined) {
	console.log(root);
}

accountingJS(this);

// 'this' will point to Window.

(function accountingJS(root, undefined){
	console.log(root);
})(this);

// undefined is passed as a second argument to ensure undefined is truly undefined. Defensive coding technique for legacy.

(function accountingJS(root, undefined){
	console.log("undefined: " + undefined);
})(this);

// window object (global scope)

// Problem with IIFE, well, not really a problem, but if your library is inside IIFE. It won't be accessible from outside of the program. 

(function(root, undefined){
		
	var breads = {
		wheat: "wheat bread",
		white: "white bread"
	};

	var fillings = {
		meat: 'bacon',
		veggie: 'lettuce'
	};
	
	var sandwitchLibrary = {
		breads: breads,
		fillings: fillings
	};	
	
	root['sandwitchLibrary'] = sandwitchLibrary;
		
})(this);

// I want to use it like sandwitchLibrary.breads.wheat 

// However, if you program has 100 libraries, 100 varialbes will be exposed to global scope. Is there a way to prevent that?

// Current approach. One global variable per library.
// 1. Create: Run library in IIFE, and attach to window.
// 2. Use: Access library from window.
// Used in Front-end development.

// Another approach. One global variable period.
// 1. Create: librarySystem('libraryName', function(){ /* return library */ })
// 2. Use: librarySystem('libraryName');

(function() {
	
	var libraryStorage = {};
	
	function librarySystem(libraryName, callback){
		if (arguments.length > 1) {
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStrage[libraryName];
		}	
	}
	
	window.librarySystem = librarySystem;
	
})();

librarySystem('sandwitchLibrary', function() {
	var breads = {
		wheat: "wheat bread",
		white: "white bread"
	};

	var fillings = {
		meat: 'bacon',
		veggie: 'lettuce'
	};
	
	var sandwitchLibrary = {
		breads: breads,
		fillings: fillings
	};	
	
	return sandwitchLibrary;
})

// librarySystem => similar with Node.js require.

window.sandwitchLibrary = "Library with books."

(function(){
	
	var breads = {
		wheat: "wheat bread",
		white: "white bread"
	};

	var fillings = {
		meat: 'bacon',
		veggie: 'lettuce'
	};
	
	var sandwitchLibrary = {
		breads: breads,
		fillings: fillings
	};	
	
	if(typeof librarySystem !== 'undefined'){
		// Handle librarySystem case.
		librarySystem('sandwitchLibrary', function(){
			return sandwitchLibrary;
		});
	} else {
		// Handle window case.
		
		// .noConflict implementation.
		var oldSandwitchLibrary = window.sandwitchLibrary;
		
		sandwitchLibrary.noConflict = function() {
			window.sandwitchLibrary = oldSandwitchLibrary;
			return sandwitchLibrary;
		};

		window.sandwitchLibrary = sandwitchLibrary;
	}	
	
})();

// What if sandwitchLibrary already exists in global scope?
// Then, this code above will overwrite the sandwitchLibrary.

// .noConflict will reset window.sandwitchLibary to the original value. Also, return actual sandwitchLibrary
var sandwitchJS = sandwitchLibrary.noConflict(); 




