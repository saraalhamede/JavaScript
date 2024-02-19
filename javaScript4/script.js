let counter = 1;
function plus() {
    counter++;
    document.getElementById("count").innerHTML = counter;
    document.getElementById("count").style.fontSize = counter + "em";
}
function minus() {
    counter--;
    document.getElementById("count").innerHTML = counter;
    document.getElementById("count").style.fontSize = counter + "em";
}
function cityChange() {
    const city = document.getElementById("city").value;
    if (city == "rahat") {
        document.getElementById("output1").innerHTML = "right";
    } else {
        document.getElementById("output1").innerHTML = "mmmm, think again";

    }
}

function loginCorret() {
    const pw = document.getElementById("password").value;
    const un = document.getElementById("username").value;
    const output = document.getElementById("output2");
    if (un == "banana" && pw == "a123") {
        document.getElementById("output2").innerHTML = "login succfuly";
        output.style.color = "green";
    } else {
        document.getElementById("output2").innerHTML = "Please try again!!";
        output.style.color = "red";
    }
}
function color() {
    const elem = document.getElementById("grade");
    const num = +elem.value;
    if (num <= 40) {
        elem.style.backgroundColor = "RED";
    } else if (num <= 60) {
        elem.style.backgroundColor = "orange";
    } else if (num <= 80) {
        elem.style.backgroundColor = "blue";
    } else if (num <= 100) {
        elem.style.backgroundColor = "green";
    } else {
        elem.style.backgroundColor = "";
    }
}