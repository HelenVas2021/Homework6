//Задача №1
const ArrayOneLength = 10;
let ArrayOne = [];
ArrayOne = new Array(ArrayOneLength);

for (k = 0; k < ArrayOne.length; k++) {
	ArrayOne[k] = Math.floor((Math.random() * 15));
}

console.log(ArrayOne);


function copy(list, f) {
	let results = [];
	if (f === undefined) {
		f = function (value) { return value }
	}

	for (i = 0; i < list.length; i++) {
		results[i] = f(list[i]);

	}
	return results;
}

console.log(copy(ArrayOne, function (value) { return value * 10 }))

// let copyArray = ArrayOne.map(
// 	function result(value) {
// 		return value * 10;
// 	}
// );
// console.log(copyArray);