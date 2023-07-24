
function BMIcalculator(height, weight) {
    return weight / (height * height)
} 

function showStatus(BMIIndex) {
    if (BMIIndex < 18) {
        return "underweight"
    }

if (BMIIndex > 18 && BMIIndex < 25) {
return "normal"
}

if (BMIIndex > 25) {
    return "overweight"
}

}




let userweight = Number(prompt('enter your weight in kg'));
let userheight = Number(prompt('enter your height')); 

let index = BMIcalculator(userheight, userweight);
let status = showStatus(index);
document.write(status);