let currentnumber = "";
let totalnumber = "";
let operator ="";

document.addEventListener("DOMContentLoaded", ()=>{
    let inputfields = document.getElementsByClassName("small-button");
    let clearbutton = document.getElementById("clear");
    let backspace = document.getElementById("backspace");
    let equal = document.getElementById("=");

    for(let i = 0 ; i < inputfields.length; i++) {inputfields[i].addEventListener("click", addInput)};
    clearbutton.addEventListener("click", clearAll);
    backspace.addEventListener("click", deleteLast);
    equal.addEventListener("click", calculate);
    document.addEventListener("keydown", (e) => {validateKey(e.key)})
})

function addInput(...keypress) {

    if(currentnumber === "0"){
        currentnumber = "";
    }

    let input = undefined;

    if(this.id == null) input = keypress;
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
        if(+currentnumber > 0){
            currentnumber = "-" + currentnumber
        }
        else if (+currentnumber < 0){
            currentnumber = currentnumber.slice(1, currentnumber.length);
        }

        writeFirstLine(currentnumber);
    }
    else if(input === "="){
        calculate();
    }
    else{
        addOperator(input);
    }
   }

function addOperator(id){

    if (operator !== "" && currentnumber !== ""){
        calculate();
    }
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
    if(totalnumber === ""){
        totalnumber = "0";
    }

    switch(operator){
        case "+":
            totalnumber = +totalnumber + +currentnumber;
            currentnumber = "";
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "-":
            totalnumber = +totalnumber - +currentnumber;
            currentnumber = "";
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "*":
            totalnumber = +totalnumber * +currentnumber;
            currentnumber = "";
            writeSecondLine(totalnumber);
            writeFirstLine("")
            break;
        case "/":
            totalnumber = +totalnumber / +currentnumber;
            currentnumber = "";
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
    currentnumber = currentnumber.slice(0, currentnumber.length - 1);
    writeFirstLine(currentnumber);
}

function validateKey(input){
    if(Number.isInteger(+input)){
        addInput(input);
    }
    else if(input === "*" || input === "/" || input === "+" || input === "-" || input === "="){
        addInput(input);
    }
    else{
        console.log("Invalid input");
    }
}

function writeFirstLine(text){
    let line = document.getElementById("firstline");
    line.innerHTML = text;
}

function writeSecondLine(text){
    let line = document.getElementById("secondline");
    line.innerHTML = text;
}