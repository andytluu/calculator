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
    let result = 0;
    switch(oper){
        case "+":
            result = add(fNum, sNum);
            break;
        case "-":
            result = subtract(fNum, sNum);
            break;
        case "x":
            result = multiply(fNum, sNum);
            break;
        case "/":
            result = divide(fNum, sNum);
            break;
    }

    return result;
}

const numBtns = document.querySelectorAll(".nums");
const display = document.querySelector("#display");
const clear = document.querySelector("#del");
const oper = document.querySelectorAll(".operate");
const equal = document.querySelector("#equal");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let store = 0;

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = 0;
    secondNum = 0;

    console.log(firstNum);
    console.log(secondNum);
});
equal.addEventListener("click", () => {
    secondNum = parseInt(display.textContent);
    store = operate(firstNum,secondNum,operator);
    display.textContent = store.toString();
    firstNum = 0;
    secondNum = 0;

    console.log(result);
});
oper.forEach((elem) => {
    elem.addEventListener("click", () => {
        operator = elem.textContent;
        firstNum = parseInt(display.textContent);
        display.textContent = "";


        console.log(operator);
        console.log(firstNum);
    });
});
numBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
        let txt = elem.textContent;
        display.append(txt);
    });
});