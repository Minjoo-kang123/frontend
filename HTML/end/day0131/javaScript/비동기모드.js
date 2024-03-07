let fs = require("fs");

fs.readFile("boot.html","utf-8", (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
    return data
})