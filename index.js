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
    console.log(totalnumber, operator, currentnumber)
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

        console.log(currentnumber);
    }
    else{
        addOperator(this.id);
    }
   }

function addOperator(id){
//    if(operator !== "" && currentnumber !== ""){
//        operator = id;
//    }
//    else if(totalnumber === "" && currentnumber !== ""){
//        totalnumber = currentnumber;
//        currentnumber = "";
//        operator = id;
//
//        console.log(totalnumber, operator, currentnumber);
//    }

    if (operator !== "" && currentnumber !== ""){
        calculate();
    }
    else if (operator === "" && currentnumber !== ""){
        totalnumber = currentnumber;
        currentnumber = "";
        operator = id;
        console.log(totalnumber, operator, currentnumber)
    }
    else{
        operator = id;
        console.log(totalnumber, operator, currentnumber)
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

            console.log(totalnumber);
            break;
        case "-":
            totalnumber = +totalnumber - +currentnumber;
            currentnumber = "";

            console.log(totalnumber);
            break;
        case "*":
            totalnumber = +totalnumber * +currentnumber;
            currentnumber = "";

            console.log(totalnumber);
            break;
        case "/":
            totalnumber = +totalnumber / +currentnumber;
            currentnumber = "";

            console.log(totalnumber);
            break;
    }
}

function clearAll(){
    currentnumber = ""
    totalnumber = ""

    console.log("cleared");
}

function deleteLast(){
    currentnumber = currentnumber.slice(0, currentnumber.length - 1);
    console.log(currentnumber);
}