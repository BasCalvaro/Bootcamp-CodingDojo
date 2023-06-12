function pizzaOven(tipoCorteza, tipoSalsa, quesos, extras) {
	var pizza = {};

	pizza.tipoCorteza = tipoCorteza;
	pizza.tipoSalsa = tipoSalsa;
	pizza.quesos = quesos;
	pizza.extras = extras;

	return pizza;
}

var p1 = pizzaOven(
	"estilo Chicago",
	"tradicional",
	["mozzarella"],
	["pepperoni", "salchicha"]
);
console.log(p1);

var p2 = pizzaOven(
	"lanzada a mano",
	"marinara",
	["mozzarella", "feta"],
	["champiñones", "aceitunas", "cebollas"]
);
console.log(p2);

var tipoCorteza = [
	"estilo chicago",
	"lanzada a mano",
	"tradicional",
	"delgada",
	"borde de queso"
];

var tipoSalsa = [
	"tradicional",
	"marinara",
	"bbq",
	"crema blanca",
	"crema de espinacas",
];

var quesos = ["mozzarella", "cheddar", "feta", "parmesano", "queso vegano"];

var extras = [
	"pepperoni",
	"salchicha",
	"champiñones",
	"aceitunas",
	"cebolla",
	"pollo",
	"tocino",
	"carne vegana",
	"pimenton",
	"choclo",
];

function randomRange(max, min) {
	return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
	var i = Math.floor(arr.length * Math.random());
	return arr[i];
}

function randomOven(n) {
	for (var j = 0; j < n; j++) {
		var pizza = {};
		pizza.tipoCorteza = randomPick(tipoCorteza);
		pizza.tipoSalsa = randomPick(tipoSalsa);
		pizza.quesos = [];
		pizza.extras = [];

		for (var i = 0; i < randomRange(3, 1); i++) {
			pizza.quesos.push(randomPick(quesos));
		}
		for (var i = 0; i < randomRange(10, 0); i++) {
			pizza.extras.push(randomPick(extras));
		}
		console.log(pizza);
	}
}

randomOven(2);