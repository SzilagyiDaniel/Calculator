let total = "";
let firstnumber = "";
let secondnumber = "";
let operator = "";

function addNumber(id){
    if(operator){
        secondnumber = secondnumber + String(id);
        console.log(firstnumber, secondnumber);
    }
    else{
        firstnumber = firstnumber + String(id);
        console.log(firstnumber);
    }

}

function addOperator(id){
    if(!secondnumber){
        operator = String(id);
        console.log(operator);
    }
    else{
        calculate();
    }
}

function calculate(){
    console.log(firstnumber, operator, secondnumber);

    switch(operator){
        case "+":
            console.log(+firstnumber + +secondnumber);
            break;
        case "-":
            console.log(+firstnumber - +secondnumber);
            break;
        case "*":
            console.log(+firstnumber * +secondnumber);
            break;
        case "/":
            console.log(+firstnumber / +secondnumber);
            break;
    }

    clear();
}

function clear(){
    total = "";
    firstnumber = "";
    secondnumber = "";
    operator = "";

    console.log("cleared");
}
