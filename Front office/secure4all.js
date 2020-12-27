//Show Password
let pswd = false;

function showPswd() {
    if (pswd) {
        document.getElementById("password").setAttribute("type", "password");
        pswd = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        pswd = true;
    }
}

//Occurences
function showdayocc() {
    let x = document.getElementById("occday");
    let y = document.getElementById("occweek");
    let z = document.getElementById("occmonth");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
    }
    else {
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
    }
}

function showweekocc() {
    let x = document.getElementById("occday");
    let y = document.getElementById("occweek");
    let z = document.getElementById("occmonth");
    if (y.style.visibility === "hidden") {
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
        z.style.visibility = "hidden";
    }
    else {
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
    }
}

function showmonthocc() {
    let x = document.getElementById("occday");
    let y = document.getElementById("occweek");
    let z = document.getElementById("occmonth");
    if (z.style.visibility === "hidden") {
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "visible";
    }
    else {
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
    }
}
