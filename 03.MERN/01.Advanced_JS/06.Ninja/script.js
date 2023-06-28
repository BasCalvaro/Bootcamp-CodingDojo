class Ninja {
	constructor(name, health) {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}
	sayname() {
		console.log(`Your name is ${this.name}.`);
	}
	showstats() {
		console.log(`This are your stats:
        Name: ${this.name}.
        Strenght: ${this.strength}.
        Health: ${this.health}.`);
	}
	drinkSake() {
		this.health += 10;
	}
}