const pokemon = Object.freeze([
	{ id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
	{ id: 5, name: "Charmeleon", types: ["fire"] },
	{ id: 9, name: "Blastoise", types: ["water"] },
	{ id: 12, name: "Butterfree", types: ["bug", "flying"] },
	{ id: 16, name: "Pidgey", types: ["normal", "flying"] },
	{ id: 23, name: "Ekans", types: ["poison"] },
	{ id: 24, name: "Arbok", types: ["poison"] },
	{ id: 25, name: "Pikachu", types: ["electric"] },
	{ id: 37, name: "Vulpix", types: ["fire"] },
	{ id: 52, name: "Meowth", types: ["normal"] },
	{ id: 63, name: "Abra", types: ["psychic"] },
	{ id: 67, name: "Machamp", types: ["fighting"] },
	{ id: 72, name: "Tentacool", types: ["water", "poison"] },
	{ id: 74, name: "Geodude", types: ["rock", "ground"] },
	{ id: 87, name: "Dewgong", types: ["water", "ice"] },
	{ id: 98, name: "Krabby", types: ["water"] },
	{ id: 115, name: "Kangaskhan", types: ["normal"] },
	{ id: 122, name: "Mr. Mime", types: ["psychic"] },
	{ id: 133, name: "Eevee", types: ["normal"] },
	{ id: 144, name: "Articuno", types: ["ice", "flying"] },
	{ id: 145, name: "Zapdos", types: ["electric", "flying"] },
	{ id: 146, name: "Moltres", types: ["fire", "flying"] },
	{ id: 148, name: "Dragonair", types: ["dragon"] },
]);

const bListPkmn = pokemon.filter((p) => p.name[0] === "B");
const bList = bListPkmn.map((p) => p.name);
console.log(bList);

const pkmnIds = pokemon.map((p) => p.id);
console.log(pkmnIds);

const three = pokemon.filter((p) => p.id % 3 === 0);
const thr = three.map((p) => p.name);
console.log(thr);

const fType = pokemon.filter((p) => p.types.includes("fire"));
const fTy = fType.map((p) => p.name);
console.log(fTy);

const Types = pokemon.filter((p) => p.types.length > 1);
const Typ = Types.map((p) => p.name);
console.log(Typ);

const names = pokemon.map((p) => p.name);
console.log(names);

const names99 = pokemon.filter((p) => p.id > 99);
const nam99 = names99.map((p) => p.name);
console.log(nam99);

const pType = pokemon.filter((p) => p.types.includes("poison"));
const pTy = pType.map((p) => p.name);
console.log(pTy);

const vType = pokemon.filter((p) => p.types[1] === "flying");
const vTy = vType.map((p) => p.types[0]);
console.log(vTy);

const nType = pokemon.filter((p) => p.types.includes("normal"));
const nTy = nType.length;
console.log("You have " + nTy + " pokemon with type normal");
