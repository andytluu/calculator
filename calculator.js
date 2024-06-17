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
let firstNum = 0;
let secondNum = 0;
let operator = "";
console.log(add(1,2));
console.log(subtract(2,1));
console.log(multiply(2,2));
console.log(divide(4,2));