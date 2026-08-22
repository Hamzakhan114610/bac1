
const add1 = 100, add2 = 5;
const sub1 = 13, sub2 = 2;
const mul1 = 4, mul2 = 5;
const div1 = 20, div2 = 0;


const additionResult = add1 + add2;
const subtractionResult = sub1 - sub2;
const multiplicationResult = mul1 * mul2;


let divisionResult;
if (div2 === 0) {
    divisionResult = "Error: Cannot be divided by 0";
} else {
    divisionResult = div1 / div2;
}


console.log("Addition (" + add1 + " + " + add2 + ") = " + additionResult);
console.log("Subtraction (" + sub1 + " - " + sub2 + ") = " + subtractionResult);
console.log("Multiplication (" + mul1 + " * " + mul2 + ") = " + multiplicationResult);
console.log("Division (" + div1 + " / " + div2 + ") = " + divisionResult);
