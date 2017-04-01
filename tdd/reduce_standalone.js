var array = [1, 2, 3, 4, 5];

var sumSoFar = 0;
sumSoFar = sumSoFar + array[0];
sumSoFar = sumSoFar + array[1];
sumSoFar = sumSoFar + array[2];
sumSoFar = sumSoFar + array[3];
sumSoFar = sumSoFar + array[4];

///////////////////////////////////

function adder(sumSoFar, nextNumber)
{
	return sumSoFar + nextNumber;
}

var array = [1, 2, 3, 4, 5];
var sumSoFar = 0;
sumSoFar = adder(sumSoFar, array[0]);
sumSoFar = adder(sumSoFar, array[1]);
sumSoFar = adder(sumSoFar, array[2]);
sumSoFar = adder(sumSoFar, array[3]);
sumSoFar = adder(sumSoFar, array[4]);

///////////////////////////////////

var sumSoFar = 0;
for (var i=0; i<array.length; i++) {
	sumSoFar = adder(sumSoFar, array[i]);
}

///////////////////////////////////

function adder(sumSoFar, nextNumber)
{
	return sumSoFar + nextNumber;
}

function reduce(array, callback, startingValue) {
	var resultSoFar = startingValue;
	
	for(var i=0; i<array.length; i++) {
		resultSoFar = callback(resultSoFar, array[i]);
	}
	
	return resultSoFar;
}

//reduce([1, 2, 3, 4, 5], adder, 0);
reduce(['b', 'o', 'y', 'o', 'u', 'n', 'g'], function(resultSoFar, nextLetter){
	return resultSoFar + nextLetter;
}, '');

//reduce take some data and return a single value.

