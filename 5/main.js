



function middle(number1, number2, number3){
    if (((number2 > number1) && (number3 > number2)) || ((number2 > number3) && (number1 > number2)))


    return number2;


    else if (((number2 < number1) && (number3 > number1)) || ((number1 > number3) && (number1 < number2)))
return number1;

else 
return number3

}


let a = Number(prompt('enter number'));
let b = Number(prompt('enter number'));
let c = Number(prompt('enter number'));

let last = middle(a, b, c);
document.write(middleNumbeis);
