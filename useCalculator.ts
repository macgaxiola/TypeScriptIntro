import {Calculator} from "./Calculator";
import {CalculatorStatic} from "./CalculatorStatic";

var c1 = new Calculator();
console.log(c1.sum(2, 3));
console.log(c1.rest(2,1));

console.log(CalculatorStatic.sum(2, 3));
console.log(CalculatorStatic.rest(2,1));