let Weight = parseInt(document
    .querySelector("#number1").value);
let Height = parseInt(document
    .querySelector("#number2").value);

function myfunction() {
    let BMI = (Weight / ((Height * Height) 
    / 10000)).toFixed(2);
    console.log("Your BMI :" + BMI);
}