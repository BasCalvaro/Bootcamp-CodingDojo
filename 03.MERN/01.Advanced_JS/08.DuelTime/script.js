class Card {
	constructor(name, cost) {
		this.name = name;
		this.costo = cost;
	}
}

class Unit extends Card {
	constructor(name, cost, power, res) {
		super(name, cost);
		this.power = power;
		this.res = res;
	}
	attack(target) {
		if (target instanceof Unit) {
			if (this.power > target.res) {
				console.log(`${this.name} deals damage to ${target.name}.`);
			} else if (this.power < target.res) {
				console.log(`${this.name} takes damage from ${target.name}.`);
			} else {
				console.log(`${this.name} and ${target.name} are evenly matched.`);
			}
		} else {
			throw new Error("Target must be a unit!");
		}
	}
	showstats() {
		console.log(`This are your stats:
        Name: ${this.name}.
        Power: ${this.power}.
        Resistance: ${this.res}.`);
	}
}

class Effect extends Card {
	constructor(name, cost, text, stat, value) {
		super(name, cost);
		this.text = text;
		this.stat = stat;
		this.value = value;
	}
	play(target) {
		if (target instanceof Unit) {
			switch (this.stat) {
				case "power":
					target.power += this.value;
					target.showstats();
					break;
				case "res":
					target.res += this.value;
					target.showstats();
					break;
				default:
					throw new Error("Invalid stat for effect!");
			}
		} else {
			throw new Error("Target must be a unit!");
		}
	}
}

// 1	El jugador 1 convoca a "Ninja Cinturón Rojo"
const RedBelt = new Unit("Ninja Red Belt", 3, 3, 4);
RedBelt.showstats();
// 1	El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
const Algo = new Effect(
	"Algoritmo Difícil",
	2,
	"aumentar la resistencia del objetivo en 3",
	"res",
	3
);
Algo.play(RedBelt);

// 2	El jugador 2 convoca a "Ninja Cinturón Negro"
const BlackBelt = new Unit("Ninja Black Belt", 4, 5, 4);
BlackBelt.showstats();

// 2	El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
const Reject = new Effect(
	"Rechazo de promesa no manejado",
	1,
	"reducir la resistencia del objetivo en 2",
	"res",
	-2
);
Reject.play(RedBelt);

// 3	El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
const Pair = new Effect(
	"Programación en pareja",
	3,
	"aumentar el poder del objetivo en 2",
	"power",
	2
);
Pair.play(RedBelt);

// 3	El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
RedBelt.attack(BlackBelt);
