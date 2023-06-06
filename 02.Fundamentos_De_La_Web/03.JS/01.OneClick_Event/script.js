function hide(element) {
	element.remove();
}

function logoff(element) {
	if (element.innerText != "Logout") {
		element.innerText = "Logout";
	} //
	else {
		element.innerText = "Login";
	}
}

function likes(element){
    text = element.innerText;
    var cont = text.split(" ");
    var like = parseInt(cont[0]);
    like++;
    element.innerText = like+" likes";
    window.alert("Ninja was liked");
}