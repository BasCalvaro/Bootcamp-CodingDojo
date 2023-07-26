function tossCoin() {
	return Math.random() > 0.5 ? "heads" : "tails";
}
// _____Synchronous function_____

// function fiveHeadsSync() {
// 	let headsCount = 0;
// 	let attempts = 0;
// 	while (headsCount < 5) {
// 		attempts++;
// 		let result = tossCoin();
// 		console.log(`${result} was flipped`);
// 		if (result === "heads") {
// 			headsCount++;
// 		} else {
// 			headsCount = 0;
// 		}
// 	}
// 	return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

// ______________________________________________________________________

// _____Asynchronous function_____

function fiveHeads() {
	return new Promise((resolve, reject) => {
		let headsCount = 0;
		let attempts = 0;
		while (headsCount < 5) {
			attempts++;
			let result = tossCoin();
			console.log(`${result} was flipped`);

			if (attempts >= 50) {
				reject(`You have reach ${attempts} attemps. Try again`);
				break;
			}
			if (result === "heads") {
				headsCount++;
			} else {
				headsCount = 0;
			}
		}
		resolve(`It took ${attempts} tries to flip five "heads"`);
	});
}
fiveHeads()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
console.log("This run before the fiveHeads function completes");
