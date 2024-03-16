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