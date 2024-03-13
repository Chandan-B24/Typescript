//in typescript things considered as a falsy are
// false
// 0
// NaN (the "not a number" value)
// "" (empty string)
// [] (empty array)
// null
// undefined

//apart from these all the other value as treated as a true

const apple:number = 3
const banana:number = 0
console.log(apple || banana) // by using the logical or operator we can choose the true values // 3

//( !! )double not operator forces the variable to turn into the boolean expression

const bananas = 3;
const apples = 0;
console.log(!!bananas || !!apples) // true

// nullish coalescing operator (??) using we can choose the right side operator only if the left side operator is null or undefined

const grapes = null;
const oranges = 0;
console.log(grapes ?? oranges)  // o beacuse grapes is null