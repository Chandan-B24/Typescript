type numberOrstring = string | number // unions
const userUid : numberOrstring = 998787;
const userUid2 : numberOrstring = 'chandan';
console.log(userUid)
console.log(userUid2)

//intersections
type Name = {name : string}
type Age = {age : number}

type PersonDetails = Name & Age

const personObjects : PersonDetails = {
    name : 'chandan',
    age : 21
}

console.log(personObjects)

