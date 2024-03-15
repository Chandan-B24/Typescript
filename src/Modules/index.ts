//exporting and importing modules

import { add, sub } from "./math";
import { Calculator } from "./calculator";

console.log(add(1,2));
console.log(sub(1,2));

const calc = new Calculator()

console.log(calc.add(1,2))
console.log(calc.sub(5,2))
console.log(calc.mul(1,2))
console.log(calc.div(4,2))