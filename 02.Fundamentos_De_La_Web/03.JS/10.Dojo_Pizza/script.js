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

var p3 = pizzaOven(
	"tradicional",
	"crema",
	["mozzarella"],
	["tomate", "espinaca", "cebollas"]
);
console.log(p3);

var p4 = pizzaOven(
	"delgada",
	"bbq",
	["mozzarella"],
	["pollo", "tocino"]
);
console.log(p4);