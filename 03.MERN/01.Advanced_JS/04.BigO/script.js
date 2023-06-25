const { performance } = require("perf_hooks");
let start;

// Prime numbers

Number.prototype.isPrime = function () {
	let r = Math.sqrt(this);
	if (this % 2 === 0) {
		return false;
	}
	for (let i = 2; i <= r; i++) {
		if (this % i === 0) {
			return false;
		}
	}
	return true;
};

// //10.000
start = performance.now();
let primeCount = 0;
let num = 1; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
	if (num.isPrime()) {
		primeCount++;
	}
	num++;
}

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// //100.000
start = performance.now();
primeCount = 0;
num = 1;
while (primeCount < 1e5) {
	if (num.isPrime()) {
		primeCount++;
	}
	num++;
}

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// // //1.000.000
// start = performance.now();
// primeCount = 0;
// num = 1;
// while (primeCount < 1e6) {
// 	if (num.isPrime()) {
// 		primeCount++;
// 	}
// 	num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

console.log("--------------------------------------------------------------------------");

// Fibonacci
// //recursive

function rFib(n) {
	if (n < 2) {
		return n;
	}
	return rFib(n - 1) + rFib(n - 2);
}

start = performance.now();
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// //iterative
function iFib(n) {
	const vals = [0, 1];
	while (vals.length - 1 < n) {
		let len = vals.length;
		vals.push(vals[len - 1] + vals[len - 2]);
	}
	return vals[n];
}

start = performance.now();
console.log(iFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);


console.log("--------------------------------------------------------------------------");

// Reverse a String
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// // Original
start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)
console.log(`This took ${performance.now() - start} milliseconds to run`);

// //New
start = performance.now();
function reverseString(str) {
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString;
}
console.log(reverseString(story))
console.log(`This took ${performance.now() - start} milliseconds to run`);

