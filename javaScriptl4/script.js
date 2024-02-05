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