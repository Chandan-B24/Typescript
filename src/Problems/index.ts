// Problem 1 : Write a TypeScript function to find the average of all elements in an array of numbers.

const findAverage = (number:number[]):number => {
    let avg:number = 0;
    let noOfElements:number = number.length;
    let sum:number = 0;
    for(let i = 0; i< noOfElements;i++){
        sum += number[i]
    }
    avg = sum / noOfElements;
   return avg
}

console.log(findAverage([1,2,3,4,5,6,7,8,9,10]))


// Problem 2 : Write a TypeScript function to check if a given value exists in an array of strings.
const ifExists = (array:string[],toFind:string):boolean => {
    let result:boolean;
    result = array.includes(toFind)
    return result
}

console.log(ifExists(["dog","cat","bird"],"pig"))

// Problem 3 : Write a TypeScript function to remove duplicates from an array of numbers with using & without using built-in functions like Set.

//without using set
const removeDuplicates = (array:number[]):number[] => {
    let newArray:Array<number> = []
        for (let i=0; i < array.length;i++){
            let duplicate:boolean = false
            for(let j=0; j<newArray.length;j++){
                if(array[i] === newArray[j]){
                   duplicate = true
                   break
                }   
            }
            if(!duplicate){
                newArray.push(array[i])
            }
        }
    return newArray
}

console.log(removeDuplicates([1,1,2,4,5,6,7,7,6,5,9,8]))

// Problem 4 : Write a TypeScript function to find the longest consecutive sequence of increasing numbers in an array of numbers.

