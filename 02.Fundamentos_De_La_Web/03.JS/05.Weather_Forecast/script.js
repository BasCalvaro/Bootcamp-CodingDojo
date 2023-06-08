function walert(){
    alert("Loading weather repot...")
}

function tempchange(element){
    var htemp = document.getElementsByClassName("hot")
    console.log(htemp)

    var ctemp = document.getElementsByClassName("cold")
    console.log(ctemp)

    for (var i=0;i<htemp.length;i++){
        var th = htemp[i].innerText;
        var tc = ctemp[i].innerText;
        th = th.split("°");
        tc = tc.split("°");
        if(element.value == "°C"){
            th = (th[0]-32)*5/9;
            th = Math.round(th);
            
            tc = (tc[0]-32)*5/9;
            tc = Math.round(tc);
        }
        else if(element.value == "°F"){
            th = (9*th[0]/5)+32;
            th = Math.round(th);
            tc = (9*tc[0]/5)+32;
            tc = Math.round(tc);
        }
        htemp[i].innerText = th+"°";        
        ctemp[i].innerText = tc+"°";
    }
}

function remove(element) {
	var div = element.closest(".cookies");
    div.parentNode.removeChild(div);

    var conreq = document.getElementById("conreq").innerText;
    conreq--;
    document.getElementById("conreq").innerText = conreq;
}
