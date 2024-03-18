type TypeName<T> = 
T extends string ? string :
T extends number ? number :
T extends boolean ? boolean :
object;


const uniqueName : TypeName<string> = "chandan";
const uniqueNumber : TypeName<number> = 21;
const isUnique : TypeName<{key : string}> = {key : '123'};

console.log(typeof uniqueName); //string
console.log(typeof uniqueNumber); //number
console.log(typeof isUnique); //object
