function showLog() {
    var show = document.getElementById("log");
    var hide = document.getElementById("regis");
    show.style.display="block";
    hide.style.display="none";
    var color = document.getElementById("loginbut");
    var gray = document.getElementById("regisbut");
    color.style.color="#20a0ff";
    gray.style.color="gray";
    var trans = document.getElementById("slider");
    trans.style.marginLeft="28px";
}

function showRegis() {
    var show = document.getElementById("regis");
    var hide = document.getElementById("log");
    show.style.display="block";
    hide.style.display="none";
    var color = document.getElementById("regisbut");
    var gray = document.getElementById("loginbut");
    color.style.color="#20a0ff";
    gray.style.color="gray";
    var trans = document.getElementById("slider");
    trans.style.marginLeft="140px";
}

function changeCanSee() {
    var notSee = document.getElementById("password");
    var see = document.getElementById("passwordSee");
    var pic = document.getElementById("see");
    if (notSee.style.display=="inline-block"){
        notSee.style.display="none";
        see.style.display="inline-block";
        see.value=notSee.value;
        pic.setAttribute("src", "../img/css/unlock.png");
    } else {
        notSee.style.display="inline-block";
        notSee.value=see.value;
        see.style.display="none";
        pic.setAttribute("src", "../img/css/lock.png");
    }
}

function changeRegCanSee() {
    var notSee = document.getElementById("chp");
    var see = document.getElementById("cht");
    var pic = document.getElementById("seereg");
    if (notSee.style.display=="inline-block"){
        notSee.style.display="none";
        see.style.display="inline-block";
        see.value=notSee.value;
        pic.setAttribute("src", "../img/css/unlock.png");
    } else {
        notSee.style.display="inline-block";
        notSee.value=see.value;
        see.style.display="none";
        pic.setAttribute("src", "../img/css/lock.png");
    }
}
