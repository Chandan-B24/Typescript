//Basic program 
const message:string = "Hello welcome to typescript"
console.log(message)
//types in typescript
//number: For numeric values.
// string: For textual data.
// boolean: For true/false values.
// any: A wildcard type that can be anything.
// arrays: For collections of values, denoted by Type[] or Array<Type>.
const personName:string = "Chandan B"
let age:number = 21
const email:any = "chandanb24002@gmail.com"
let isWorking:boolean = true
let hobbies:string[] = ["cricket","video games","music"]
//using const the value cannot be changed and using let the value can bechanged or reassigned to new value

//typescript can be used to hold a specific range of value in it
//example suppose a variable holds a vlaue as a string or null
let person:string | null;
person = "Chandan B";
console.log(person) //output : Chandan B
person = null;
console.log(person) //output : null

//types
//number all the numbers in typescript are floating-point values. it may be a decimal,integer
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

