let currentnumber = "";
let totalnumber = "";
let operator ="";

document.addEventListener("DOMContentLoaded", ()=>{
    let inputfields = document.getElementsByClassName("small-button");
    let clearbutton = document.getElementById("clear");

    for(let i = 0 ; i < inputfields.length; i++) {inputfields[i].addEventListener("click", addInput)};
    clearbutton.addEventListener("click", clearAll);
})

function addInput() {
    if(Number.isInteger(+this.id)){
    currentnumber += this.id
    console.log(currentnumber)
   }
    else if (this.id === "-"){
    if (currentnumber === ""){
        currentnumber += this.id;
    }
    else{
        addOperator(this.id);
    }
   }
}

function addOperator(id){
    if(totalnumber === ""){
        totalnumber = currentnumber;
        currentnumber = "";
        operator = id;
    }

    console.log(currentnumber, id)
}

function clearAll(){
    currentnumber = ""
    totalnumber = ""

    console.log("cleared");
}