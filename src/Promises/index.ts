//Asynchronous programming is a method of programming which enables different parts of the code to run at changing times, instead of immediate.

//this is mostly reqired when we fetch something from the remote server and do the operation on server returned 

//promise creaetion

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        const success = true;
        if(success){
            resolve("Success")
        }else{
            reject("error in operation")
        }
    },1000)
})

//promise chaninig using .then or .chaining

myPromise.then((result)=>{
    console.log(result) // success
    return "chained Operations"
}).then((chainedResult)=>{
    console.log(chainedResult) //chained Operations
}).catch((error)=>{
    console.log(error)
})


//all() method pf promise

const firstPromise = new Promise<string>((resolve)=>setTimeout(resolve,1000,'one'))
const secondPromise = new Promise<string>((resolve)=>setTimeout(resolve,500,'two'))

Promise.all([firstPromise,secondPromise]).then((values)=>console.log(values))  // ['one','two']

//race in promise

const firstOnePromise = new Promise<string>((resolve)=>setTimeout(resolve,1000,'one'))
const secondOnePromise = new Promise<string>((resolve)=>setTimeout(resolve,500,'two'))


Promise.race([firstOnePromise,secondOnePromise]).then((value)=>console.log(value))


//async and await
//The async and await keywords in JavaScript are used to make asynchronous programming easy, by introducing something called coroutines.
//The await keyword is a special command which tells JavaScript to stop the execution of the current function until a Promise resolves, and then return the promise's value. 

async function fetchData():Promise<string>{
    return "data fetched successfully"
} 

//let us go with real time api's usage
interface UserApi{
    id : number,
    name : string,
    email : string
}

const fetchDataApi = async (userId : number) : Promise<UserApi> =>{
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!response.ok){
        throw new Error("Unable to fetch")
    }

    const userData : UserApi = await response.json()
    return userData
}


const displayData = async (userId : number) :Promise<void> =>{
    try {
        const user = await fetchDataApi(userId)
        console.log("User Data", user)
    } catch (error) {
        console.log(error)
    }
}   

displayData(1)






