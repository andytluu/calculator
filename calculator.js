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
const dot = document.querySelector("#dot");
let firstNum = undefined;
let secondNum = undefined;
let operator = "";
let store = 0;


dot.addEventListener("click", ()=>{
    display.append(".");
});

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = undefined;
    secondNum = undefined;

    console.log(firstNum);
    console.log(secondNum);
});
equal.addEventListener("click", () => {
    //display nothing if no numbers are pressed before equal
    if(firstNum === undefined && secondNum === undefined && display.textContent.length === 0){ 
        display.textContent = "";
        
    }
    //display first number when no operator is pressed before equal
    else if(operator.length === 0){
        let txt = display.textContent;
        display.textContent = txt;
    }
    else{
        secondNum = parseInt(display.textContent);
        if(secondNum === 0 && operator === "/"){
            display.textContent = "You can't divide by 0";
            firstNum = undefined;
            secondNum = undefined;
            operator = "";
        }
        else{
            store = operate(firstNum,secondNum,operator);
            display.textContent = store.toString();
            firstNum = undefined;
            secondNum = undefined;
        }
    }
    //console.log(store);

});
oper.forEach((elem) => {
    elem.addEventListener("click", () => {
        //store the first number and the operator
        if(firstNum === undefined){
            operator = elem.textContent;
            firstNum = parseInt(display.textContent);
        }
        //when operator is pressed again after first number is stored
        else{
            secondNum = parseInt(display.textContent);
            // Message when trying to divide by 0
            if(secondNum === 0 && operator === "/"){
                display.textContent = "You can't divide by 0";
                firstNum = undefined;
                secondNum = undefined;
                operator = "";
            }
            // display result from previous operator and store result for next operation
            else{
                store = operate(firstNum,secondNum,operator);
                display.textContent = store.toString();
                firstNum = store;
                operator = elem.textContent;
                secondNum = undefined;
            }
        }

        

        console.log(operator);
        console.log(firstNum);
    });
});
numBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
        let txt = elem.textContent;
        if(display.textContent === "You can't divide by 0"){
            display.textContent = txt;
        }
        else{
            display.append(txt);
        }
        if(firstNum !== undefined && operator !== "" && secondNum == undefined){
            secondNum = parseInt(display.textContent);
            display.textContent = txt;
        }
    });
});