let currentnumber = "";
let totalnumber = "";
let operator ="";

document.addEventListener("DOMContentLoaded", ()=>{
    const inputbutton = document.getElementsByClassName("small-button");
    const clearbutton = document.getElementById("clear");
    const backspacebutton = document.getElementById("backspace");
    const equalbutton = document.getElementById("=");

    for(let i = 0 ; i < inputbutton.length; i++) {inputbutton[i].addEventListener("click", addInput)};
    clearbutton.addEventListener("click", clearAll);
    backspacebutton.addEventListener("click", deleteLast);
    equalbutton.addEventListener("click", calculate);
    document.addEventListener("keydown", (e) => {validateKey(e.key)})
})

function addInput(...keypress) {

    let input = undefined;

    if(this.id == null) input = keypress[0];
    else input = this.id;

    if(Number.isInteger(+input)){
        currentnumber += input;
        writeFirstLine(currentnumber);
    }
    else if (input === "-" && currentnumber === "" && operator === "" && totalnumber === ""){
        currentnumber = input;
        writeFirstLine(currentnumber);
    }
    else if(input=== "float"){
        if(currentnumber.indexOf(".") === -1 && currentnumber === ""){
            currentnumber = "0" + ".";
        }
        else if (currentnumber !== "" && currentnumber.indexOf(".") < 0){
            currentnumber += ".";
        }
        writeFirstLine(currentnumber);
    }
    else if(input === "negate"){
        currentnumber = +currentnumber * -1;
        writeFirstLine(currentnumber);
    }
    else if(input === "=" || input === "Enter") calculate();
    else addOperator(input);
   }

function addOperator(id){

    if (operator !== "" && currentnumber !== "") calculate();
    else if (operator === "" && currentnumber !== ""){
        totalnumber = currentnumber;
        currentnumber = "";
        operator = id;
        writeFirstLine(totalnumber + operator);
    }
    else{
        operator = id;
        writeFirstLine(totalnumber + operator);
    }
}

function calculate(){

    switch(operator){
        case "+":
            totalnumber = +totalnumber + +currentnumber;
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "-":
            totalnumber = +totalnumber - +currentnumber;
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "*":
            totalnumber = +totalnumber * +currentnumber;
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "/":
            totalnumber = +totalnumber / +currentnumber;
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
    }
}

function clearAll(){
    currentnumber = ""
    totalnumber = ""
    operator = "";
    writeFirstLine("");
    writeSecondLine("");
}

function deleteLast(){
    if (operator !== "" && currentnumber === ""){
        operator = "";
        currentnumber = totalnumber;
        totalnumber = "";
    }
    else currentnumber = currentnumber.slice(0, currentnumber.length - 1);
    writeFirstLine(currentnumber);
}

function validateKey(input){
    if(Number.isInteger(+input) || input === "*" || input === "/" || input === "+" || input === "-" || input === "=" || input === "Enter") addInput(input);
    else if (input === "Backspace") deleteLast();
}

function writeFirstLine(text){
    let line = document.getElementById("firstline");
    line.innerHTML = totalnumber + " " + operator + " " + currentnumber;
}

function writeSecondLine(text){
    let line = document.getElementById("secondline");
    line.innerHTML = text;
}
