function likes(){
    var btnid = event.target.parentElement.id;
    var cont1 = btnid.split("-");
    var par = parseInt(cont1[1]);

    var text = document.getElementById("like-"+par).querySelector("p");
    var cont2 = text.innerText.split(" ");
    var like = parseInt(cont2[0]);

    like++;	
    
    text.innerText = like+" like(s)";
}