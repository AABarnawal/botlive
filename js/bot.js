var flag = 0;
//time
var r;
function tmo(r) {
    var tmm = new Date();
    console.log(tmm.getHours());
    var tm = tmm.getHours();
    if (tm<12) {
        r = "Good Morning";
        console.log("good morning");
        return r;
    }
    else if(tm>=12 && tm<=16){
        // return("good Afternoon");
        console.log("good Afternoon");
        r = "Good Afternoon";
        return r;
    }
     else {
        // return("good evenning")
        console.log("good evenning");
        r = "Good Evenning";
        return r;
    }
}
//images array




//enter is send
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        gkm();
    }
}
//main funtion
function snd(params) {
    console.log("hello")
    var q = document.getElementById("qry").value;
    var nl = document.createElement("li");
    nl.style.backgroundColor="#AFE1AF";
    nl.style.breakBefore="none";
    nl.style.marginLeft= "25%";
        nl.innerHTML=q;
        document.getElementById("txt").appendChild(nl);
    reply(q);
    //scroll down
    window.scrollTo(0,document.body.scrollHeight);
    //empty input section after send
    document.getElementById('qry').value = "";
    
}
function reply(q) {
    if(q==1){
        console.log("pressed 1")
        var nl = document.createElement("li");
        nl.innerHTML="This is an Informational bot developed with <br> html , css & js  by <br><strong>Ankit Arvind Barnawal</strong>";
        document.getElementById("txt").appendChild(nl);
    }
    else if(q==2){
        console.log("pressed 2")
        //images
        
            //const element = array[index];
            var nl = document.createElement("li");
            nl.innerHTML=`<img 
            style='height:120px; width:180px;' 
            src='/botlive/img/kl.png'/>`;
            document.getElementById("txt").appendChild(nl);
    }
    else if(q==3){
        console.log("pressed 3")
        var nl = document.createElement("li");
        nl.innerHTML=`<a style="color:black; text-decoration:none; border:.5px solid black; padding:5px;" href='https://github.com/AABarnawal' target='_blank'>GITHUB</a>        `;
        document.getElementById("txt").appendChild(nl);
    }
    else if(q==4){
        console.log("pressed 4")
        var nl = document.createElement("li");
        nl.innerHTML=`<a style="color:black; text-decoration:none; border:.5px solid black; padding:5px;" href='https://mail.google.com/mail/?view=cm&fs=1&to=kr.ankit.1711@gmail.com' target='_blank' style= > >> Email</a><br>
        <br><a style="color:black; text-decoration:none; border:.5px solid black; padding:5px;" href='https://t.me/AABarnawal' target='_blank' > >> Telegram</a><br>
        <br><a style="color:black; text-decoration:none; border:.5px solid black; padding:5px;" href='https://www.linkedin.com/in/ankit-a-barnawal-5a56071a7' target='_blank' > >> Linkdin</a>`;
        document.getElementById("txt").appendChild(nl);
    }
    else{
        console.log("invalid code")
        var nl = document.createElement("li");
        nl.innerHTML="Invalid entry";
        document.getElementById("txt").appendChild(nl);
    }
}

function nke() {
    var nme = document.getElementById('qry').value;
    var nl = document.createElement("li");
    nl.style.backgroundColor="#AFE1AF";
    nl.style.marginLeft= "25%";
        nl.innerHTML=nme;
        document.getElementById("txt").appendChild(nl);
        var l = document.createElement("li");
    l.innerHTML+= ` ${tmo(r)} , <strong>${nme}</strong> Send:-<br>
    1 for About<br>
    2 for Images of Project<br>
    3 for Projects &<br>
    4 for Contacts<br></br>`;
    document.getElementById("txt").appendChild(l);
    //scroll down
    window.scrollTo(0,document.body.scrollHeight);
    //empty input section after send
    document.getElementById('qry').value = "";
    flag = 1;
}
function gkm(params) {
    if (flag==0) {
        nke();
    } else {
        snd();
    }

}
