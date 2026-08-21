// Har operator ki values yahan customize karo
const add1 = 100, add2 = 5;
const sub1 = 13, sub2 = 2;
const mul1 = 4, mul2 = 5;
const div1 = 20, div2 = 0; // Agar yahan 0 rakhenge toh error aayega

// Calculations
const additionResult = add1 + add2;
const subtractionResult = sub1 - sub2;
const multiplicationResult = mul1 * mul2;

// Division ke liye condition
let divisionResult;
if (div2 === 0) {
    divisionResult = "Error: Cannot be divided by 0";
} else {
    divisionResult = div1 / div2;
}

// Outputs terminal (CMD) par show honge
console.log("Addition (" + add1 + " + " + add2 + ") = " + additionResult);
console.log("Subtraction (" + sub1 + " - " + sub2 + ") = " + subtractionResult);
console.log("Multiplication (" + mul1 + " * " + mul2 + ") = " + multiplicationResult);
console.log("Division (" + div1 + " / " + div2 + ") = " + divisionResult);