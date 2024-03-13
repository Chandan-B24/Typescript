// interfaces in typescript
//to assign the types to an object or to shape a object types interface can be used
//let us consider the objects
const carObject = {
    name : "Tata",
    modelYear : 2024,
    mileage : 21,
    onRoadPrice : 1237500
}

interface Car {
    name : string,
    modelYear : number,
    mileage : number,
    onRoadPrice : number
}

//assignment : Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User {
    name : string,
    age : number,
    city : string,
    isWorking : boolean
}

function isLegal(user:User){
    if(user.age > 18){
        return true
    }else{
        return false
    }
}

const objPerson = {
    name : "chandan B",
    age: 21,
    city : "Davanagere",
    isWorking : true
}

console.log(isLegal(objPerson))

//using classes with keyword implements to use interface

interface Person{
    name : string,
    age : number,
    greet(phrase : string) : void
}

class Employee implements Person{
    name : string ;
    age : number ;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`)
    }
}

let obj = new Employee("chandan B",23)
obj.greet("hi how are you")  // hi how are you chandan B