const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}
let result = null;
if (argv.operation === "add") {
	result = add(argv.numberA, argv.numberB);
} else if (argv.operation === "subtract") {
	result = subtract(argv.numberA, argv.numberB);
} else if (argv.operation === "divide") {
	result = divide(argv.numberA, argv.numberB);
} else if (argv.operation === "multiply") {
	result = multiply(argv.numberA, argv.numberB);
}
console.log("The result is:", result);
