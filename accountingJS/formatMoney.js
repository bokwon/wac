// Observations about recursion
// 1. what's base case?
// 2. Recursive case should be one step closer to base case each time it runs.

// Steps to recursive mastery
// 1. use map function I built in TDD and step into the function with debugger with recusive formatMoney function. (since we can't step into JS built-in navtive function)

function formatMoney(numbers) { // [[1]]
	// Recursive case
	if (Array.isArray(numbers)) {
		return numbers.map(function mapper(number) {
			return formatMoney(number);
		});
	// Base case.
	} else {
		return '$' + numbers;
	}
}

// '$' + [1] => '$1' JS calls (convert array to string) [1].toString()
// '$' + [[[1]]] => '$1'