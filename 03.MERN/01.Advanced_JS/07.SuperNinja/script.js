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
        Health: ${this.health}.
        Speed: ${this.speed}.
        Strenght: ${this.strength}.`);
	}
	drinkSake() {
		this.health += 10;
	}
}

class Sensei extends Ninja {
	constructor(name) {
		super(name, 200);
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		console.log(
			"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
		);
		this.drinkSake();
	}
}

const test = new Ninja("Test", 100);
test.sayname();
test.showstats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showstats();
