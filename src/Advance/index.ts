//keyOf and typeOf operators
let person2 = {name: "Alice", age: 28};
type Person1 = typeof person2;
type PersonKeys = keyof Person1;  // "name" | "age"


//Advance typescript ApI's
//Pick Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

interface Employee {
    id : string,
    username : string,
    age : number,
    email : string,
    password : string
}

type updateProps = Pick<Employee,'name' | 'age'>

function updateUser(updateProps : updateProps){
    console.log(`Name : ${updateProps.name} age : ${updateProps.age}`)
}

console.log(updateUser({name : "chandan",age:21}))

//partial
type upadtePropsOptional = Partial<updateProps>


function updateUser2(updateProps : upadtePropsOptional){
    console.log(`Name : ${updateProps.name} age : ${updateProps.age}`)
}

console.log(updateUser2({name : "chandan",age:21}))

