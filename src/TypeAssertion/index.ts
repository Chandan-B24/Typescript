let someValue : any = "Hello world"
let strLength : number = (<string>someValue).length;
let stringLength : number = (someValue as string).length;

console.log(strLength) //output : 11
console.log(stringLength) // output : 11


