// Siempre hambriento
function siempreHambriento(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == "comida") {
			console.log("delicioso");
		}
	}
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

// Filtro paso alto
function highPass(arr, cutoff) {
	var filteredArr = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > cutoff) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Mejor que el promedio
function betterThanAverage(arr) {
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	sum = sum / arr.length;
	var count = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > sum) {
			count++;
		}
	}
	return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Arreglo Invertido
function reverse(arr) {
	var temp = [];
	var cont = 0;
	for (i = arr.length - 1; (i) >= 0; i--) {
		temp[cont] = arr[i];
		cont++;
	}
	arr = temp;
	return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// Arreglo de Fibonacci
function fibonacciArray(n) {
	var fibArr = [0, 1];
	var temp = 0;
	for(i = 2;i<n;i++){
		temp = fibArr[i-1]+fibArr[i-2];
		fibArr.push(temp);
	}

	return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 
