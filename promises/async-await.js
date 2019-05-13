const fs = require('fs')
function readFile(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'UTF-8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data);
            }
        })
    })
}
async function readsFile(fileName){
    var data;
    try {
        data = await readFile(fileName);
    }
    catch(err){
        console.log("In ReadsFIle ",err)
        throw err;
    }
    
    return data;
}
async function callingFunc(){
    try{
        var data = await readsFile("README.md1");
        console.log(data)
    }
    catch(err){
        console.log("In Calling Function ",err);
    }

}
console.log("Before Reading file ")
callingFunc();
console.log("After Reading file ")