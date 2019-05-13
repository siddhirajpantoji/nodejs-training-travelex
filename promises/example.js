
function simmpleFunc(callback){
    setTimeout(()=>{
        callback(null,new Date())
    },1000)
}

function promiseHandler (resolve,reject){
    setTimeout(()=>{
        resolve(new Date());
    },1000)
}

function simplePromise(){
    return new Promise(promiseHandler)
}
console.log("Before Calling ")
simmpleFunc((err,data)=>{
    console.log(data)
})
console.log("After Calling")
console.log("Before calling Promise");
// This returns a promise object but is not executed the code 
var prom   = simplePromise();
console.log(prom)
prom.then(data=>{
    console.log("Sucess of promise "+data)
})
console.log(prom);
console.log("After calling Promise")
setTimeout(()=>{
    console.log(prom);
},1000)
// GRAPHQL 