function changename(){
    var name = prompt("Whats your name?", "");
    document.getElementById("name").innerHTML = name;
}

function add(element) {
	var infoDiv = element.closest(".info");
    infoDiv.parentNode.removeChild(infoDiv);

    var conreq = document.getElementById("conreq").innerText;
    conreq--;
    document.getElementById("conreq").innerText = conreq;

    var conn = document.getElementById("conn").innerText;
    if(conn == "500+"){
        return conn;
    }
    else{
        conn++;
        document.getElementById("conn").innerText = conn;
    }

}

function remove(element) {
	var infoDiv = element.closest(".info");
    infoDiv.parentNode.removeChild(infoDiv);

    var conreq = document.getElementById("conreq").innerText;
    conreq--;
    document.getElementById("conreq").innerText = conreq;
}
