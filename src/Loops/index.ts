//simple for loop
const array:number[] = [1,2,3,4,5,6,7];
for (let i:number = 0; i< array.length;i++){
    if(array[i] % 2 === 0){
        console.log(array[i]) // output : 2,4,6
    }
}
//for of loop
const fruits : string[] = ["apple","mango","banana","grapes"];
for (let fruit of fruits){
    console.log(fruit) //output : apple mango banana grapes
}
// for in loop

let personObject:any = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
for (let key in personObject){
    console.log(key + " " + personObject[key])
}

//using for...of loop to iterate through the Map
const map = new Map<string,number>()
map.set("A",1)
map.set("B",2)
map.set("C",3)

for (let key of map.keys()){
    console.log(key) // A B C
}

for (let value of map.values()){
    console.log(value) // 1 2 3
}
for (let entry of map.entries()){
    console.log(entry) // ['A',1] ['B',2] ['C',3]
} 

for(let [key,value] of map){
    console.log(key,value) // A 1 B 2 C 3
}