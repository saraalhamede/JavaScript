let count = 0;
/* variable name should not be same like fuction name*/
function countg() {
    document.getElementById("btn").innerHTML = ++count;
}
function multi() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function plus() {
    /* + instead of class Number that converting the variable from string to number */
    const num1 = +document.getElementById("numadd1").value;
    const num2 = +document.getElementById("numadd2").value;
    document.getElementById("resultAdd").innerHTML = num1 + num2;
}