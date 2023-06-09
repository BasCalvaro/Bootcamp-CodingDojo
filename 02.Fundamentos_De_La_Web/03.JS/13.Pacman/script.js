var world = [];
var row;
var column;
var temp;
function worldCreation() {
	row = Math.floor(Math.random() * 10) + 5;
	column = Math.floor(Math.random() * 10) + 5;
	for (var y = 0; y < row; y++) {
		world[y] = [];
		for (var x = 0; x < column; x++) {
			if ((y == 0) | (x == 0) | (y == row - 1) | (x == column - 1)) {
				world[y][x] = 1;
			} //
			else if ((y % 2 == 0) | (x % 2 == 0)) {
				world[y][x] = Math.floor(Math.random() * 4);
				if (world[y][x] == 1) {
					world[y][x] = 0;
				}
			} //
			else if ((y % 2 != 0) | (x % 2 != 0)) {
				world[y][x] = Math.floor(Math.random() * 2);
			} //
			else {
				world[y][x] = Math.floor(Math.random() * 4);
			} //
			if ((y == 1) & (x == 1)) {
				world[y][x] = 0;
			} //
			if ((y == row - 2) & (x == column - 2)) {
				world[y][x] = 0;
			} //
		}
	}
}
worldCreation();

var worldDict = {
	0: "blank",
	1: "wall",
	2: "cherry",
	3: "strawberry",
};
function drawworld() {
	output = "";
	for (var row = 0; row < world.length; row++) {
		output += "<div class = 'row'>";
		for (var x = 0; x < world[row].length; x++) {
			output += "<div class =" + worldDict[world[row][x]] + "></div>";
		}
		output += "</div>";
	}
	document.getElementById("world").innerHTML = output;
}
drawworld();

var pacman = {
	x: 1,
	y: 1,
};
function drawpacman() {
	document.getElementById("pacman").style.top = pacman.y * 40 + "px";
	document.getElementById("pacman").style.left = pacman.x * 40 + "px";
}
drawpacman();

var ghosty = {
	x: column - 2,
	y: row - 2,
};

var score = 0;
document.onkeydown = function (e) {
	if (e.keyCode == 37) {
		if (world[pacman.y][pacman.x - 1] != 1) {
			pacman.x--;
		}
	}
	if (e.keyCode == 39) {
		if (world[pacman.y][pacman.x + 1] != 1) {
			pacman.x++;
		}
	}
	if (e.keyCode == 38) {
		if (world[pacman.y - 1][pacman.x] != 1) {
			pacman.y--;
		}
	}
	if (e.keyCode == 40) {
		if (world[pacman.y + 1][pacman.x] != 1) {
			pacman.y++;
		}
	}
	if (world[pacman.y][pacman.x] == 2) {
		score = score + 50;
		world[pacman.y][pacman.x] = 0;
		console.log(score);
	}
	if (world[pacman.y][pacman.x] == 3) {
		score = score + 25;
		world[pacman.y][pacman.x] = 0;
		console.log(score);
	}
	drawpacman();
	lifecount();
	drawworld();
};

var life = 3;
function lifecount() {
	if ((pacman.y == ghosty.y) & (pacman.x == ghosty.x)) {
		life--;
		if (life == 0) {
			gameover();
		} //
		else {
			pacman = {
				x: 1,
				y: 1,
			};
			drawpacman();
		}
	}
	/*if(score % (oneup*100) == 0){
			life++;
			oneup++;
			console.log(life)
		}*/
}

function enemyMovement() {
	const directionX = pacman.x - ghosty.x;
	const directionY = pacman.y - ghosty.y;

	let newX = 0;
	let newY = 0;

	if (Math.abs(directionX) > Math.abs(directionY)) {
		if (world[ghosty.y][ghosty.x + Math.sign(directionX)] !== 1) {
			newX = Math.sign(directionX);
		} //
		else if (world[ghosty.y + Math.sign(directionY)][ghosty.x] !== 1) {
			newY = Math.sign(directionY);
		}
	} //
	else {
		if (world[ghosty.y + Math.sign(directionY)][ghosty.x] !== 1) {
			newY = Math.sign(directionY);
		} //
		else if (world[ghosty.y][ghosty.x + Math.sign(directionX)] !== 1) {
			newX = Math.sign(directionX);
		}
	}
	ghosty.x += newX;
	ghosty.y += newY;

	lifecount();
}

function drawghosty() {
	document.getElementById("ghosty").style.top = ghosty.y * 40 + "px";
	document.getElementById("ghosty").style.left = ghosty.x * 40 + "px";
}
drawghosty();

var comp = world.length * world[0].length;

function checkmap() {
	var check = 0;
	for (var row = 0; row < world.length; row++) {
		for (var x = 0; x < world[row].length; x++) {
			if (world[row][x] == 0 || world[row][x] == 1) {
				check++;
			}
		}
	}
	if (check == comp) {
		victory();
	}
}

function victory() {
	var parent = document.body;
	var delworld = document.getElementById("world");
	var delpac = document.getElementById("pacman");
	var delenemy = document.getElementById("ghosty");

	parent.removeChild(delworld);
	parent.removeChild(delpac);
	parent.removeChild(delenemy);

	var victoryid = document.createElement("div");
	victoryid.id = "victory";

	document.body.appendChild(victoryid);
}

function eraseWorld() {
	var parent = document.body;

	var delworld = document.getElementById("world");
	var delpac = document.getElementById("pacman");
	var delenemy = document.getElementById("ghosty");

	parent.removeChild(delworld);
	parent.removeChild(delpac);
	parent.removeChild(delenemy);

	var gameoverid = document.createElement("div");
	gameoverid.id = "gameover";

	document.body.appendChild(gameoverid);
}

function gameLoop() {
	enemyMovement();
	drawghosty();
}
setInterval(gameLoop, 500);
setInterval(checkmap, 100);

function gameover() {
	eraseWorld();
}
