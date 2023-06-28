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

class Sensei extends Ninja {
    constructor(name) {
		this.name = name;
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
	}
    speakWisdom(){
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
    }
}

const test = new Ninja('Naya', 100)
test.sayname();
test.showstats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

