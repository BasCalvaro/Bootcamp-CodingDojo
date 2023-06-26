const quicksort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	let n = Math.floor(Math.random() * (arr.length - 1)) + 1;

	if (arr.length === 2) {
		n = 1;
	}

	let pivot = arr[n];

	let leftArr = [];
	let rightArr = [];

	for (let i = 0; i < arr.length; i++) {
		arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
		if (i + 1 === n) {
			i++;
		}
	}
	return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
};

const arr = [4, -3, -1, 9, 12, 0, 2, 8, 1, 5, 6, 15, 7, 13, -4];
console.log(quicksort(arr));

const arr2 = [11, 18, 13, 16, 12, 5, 1, 2, 17, 9, 8, 14, 10];
console.log(quicksort(arr2));

const arr3 = [15, 17, 19, 11, 7, 14, 13, 6, 20, 10, 16];
console.log(quicksort(arr3));

const arr4 = [9, 15, 20, 18, 3];
console.log(quicksort(arr4));
