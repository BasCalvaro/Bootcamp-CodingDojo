// 1
console.log(hello); // logs undefined
var hello = "world";

var hello2;
console.log(hello2); // logs undefined
hello2 = "world";

// 2
var needle = "haystack";
test();
function test() {
	var needle = "magnet";
	console.log(needle); // logs magnet
}

var needle2;
function test2() {
	var needle2 = "magnet";
	console.log(needle2); // logs magnet
}
needle2 = "haystack";
test2();

// 3
var brendan = "super cool";
function print() {
	brendan = "only okay";
	console.log(brendan); // does not log
}
console.log(brendan); // logs super cool

var brendan2;
function print() {
	brendan2 = "only okay";
	console.log(brendan2); // does not log
}
brendan2 = "super cool";
console.log(brendan2); // logs super cool

// 4
var food = "chicken";
console.log(food); // logs chicken
eat();
function eat() {
	food = "half-chicken";
	console.log(food); // logs half-chicken
	var food = "gone";
}

var food2;
food2 = "chicken";
console.log(food2); // logs chicken
function eat() {
	food2 = "half-chicken";
	console.log(food2); // logs half-chicken
	var food2;
	food2 = "gone";
}
eat();

// 5
// mean();
// console.log(food); //does not log
// var mean = function () {
// 	food = "chicken";
// 	console.log(food); //does not log
// 	var food = "fish";
// 	console.log(food); //does not log
// };
// console.log(food); //does not log

// 6
console.log(genre); //logs undefined
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre); //logs rock
	var genre = "r&b";
	console.log(genre); //logs r&b
}
console.log(genre); //logs disco

var genre2;
console.log(genre2);
genre2 = "disco";
function rewind2() {
    var genre2;
	genre2 = "rock";
	console.log(genre2); //logs rock
	genre2 = "r&b";
	console.log(genre2); //logs r&b
}
rewind2();
console.log(genre); //logs disco

// 7
dojo = "san jose";
console.log(dojo); // logs san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo); // logs seattle
	var dojo = "burbank";
	console.log(dojo); // logs burbank
}
console.log(dojo); // logs san jose

var dojo2;
dojo2 = "san jose";
console.log(dojo2); // logs san jose
function learn() {
	var dojo2;
	dojo2 = "seattle";
	console.log(dojo2); // logs seattle
	dojo2 = "burbank";
	console.log(dojo2); // logs burbank
}
learn();
console.log(dojo2); // logs san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
	const dojo = {};
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) {
		dojo.hiring = true;
	} else if (dojo.students <= 0) {
		dojo = "closed for now";
	}
	return dojo;
}

function makeDojo2(name, students) {
	const dojo2 = {};
	dojo2.name = name;
	dojo2.students = students;
	if (dojo2.students > 50) {
		dojo2.hiring = true;
	} else if (dojo2.students <= 0) {
		dojo2 = "closed for now";
	}
	return dojo2;
}
console.log(makeDojo2("Chicago", 65)); // logs {name: 'Chicago', students: 65, hiring: true}
console.log(makeDojo2("Berkeley", 0)); // logs error, dojo2 is a const that can not be modified