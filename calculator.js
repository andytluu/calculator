function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(fNum, sNum, oper){
    switch(oper){
        case "+":
            add(fNum, sNum);
            break;
        case "-":
            subtract(fNum, sNum);
            break;
        case "x":
            multiply(fNum, sNum);
            break;
        case "/":
            divide(fNum, sNum);
            break;
    }
}

const numBtns = document.querySelectorAll(".nums");
const display = document.querySelector("#display");
const clear = document.querySelector("#del");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let store = 0;

clear.addEventListener("click", () => {
    display.textContent = "";
});
numBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
        let txt = elem.textContent;
        display.append(txt);
    });
});
console.log(add(1,2));
console.log(subtract(2,1));
console.log(multiply(2,2));
console.log(divide(4,2));