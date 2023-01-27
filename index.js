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
})

function addInput() {
    if(currentnumber === "0"){
        currentnumber = "";
    }

    if(Number.isInteger(+this.id)){
    currentnumber += this.id
    writeFirstLine(currentnumber);
    }
    else if (this.id === "-" && currentnumber === "" && operator === "" && totalnumber === ""){
        currentnumber = this.id;
    }
    else if(this.id === "float"){
        if(currentnumber.indexOf(".") === -1 && currentnumber === ""){
            currentnumber = "0" + ".";
        }
        else if (currentnumber !== "" && currentnumber.indexOf(".") < 0){
            currentnumber += ".";
        }
    }
    else if(this.id === "negate"){
        if(+currentnumber > 0){
            currentnumber = "-" + currentnumber
        }
        else if (+currentnumber < 0){
            currentnumber = currentnumber.slice(1, currentnumber.length);
        }

        writeFirstLine(currentnumber);
    }
    else{
        addOperator(this.id);
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
    writeFirstLine("");
    writeSecondLine("");
}

function deleteLast(){
    currentnumber = currentnumber.slice(0, currentnumber.length - 1);
    writeFirstLine(currentnumber);
}

function writeFirstLine(text){
    let line = document.getElementById("firstline");
    line.innerHTML = text;
}

function writeSecondLine(text){
    let line = document.getElementById("secondline");
    line.innerHTML = text;
}