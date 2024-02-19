const div = document.querySelector('#numbers');
const output = document.querySelector('#output');


div.innerHTML = numbers.join(', ');
function max() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `<b>המספר הגדול הוא:</b> ${num}`;
}
function min() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `<b>המספר הקטן הוא:</b> ${num}`;
}
function sum() {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];

    }
    output.innerHTML = `<b>הסכום של המספרים הוא:</b> ${num}`;
}
function avarge() {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];

    }
    let avarge = Math.round(num / numbers.length);
    output.innerHTML = `<b>הממוצע של המספרים הוא:</b> ${avarge}`;
}
function amountnumbers() {
    output.innerHTML = `<b>הכמות של המספרים הוא:</b> ${numbers.length}`;

}
function sortASc() {
    numbers.sort((a, b) => a - b);
    div.innerHTML = numbers.join(', ')
}
function sortASc() {
    numbers.sort((a, b) => a - b);
    div.innerHTML = numbers.join(', ')
}
function sortUtoD() {
    numbers.sort((a, b) => b - a);
    div.innerHTML = numbers.join(', ')
}