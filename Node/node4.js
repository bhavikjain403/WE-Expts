var fs = require("fs")

fs.readFile("./demo1.txt", (err,data)=>{
    if(err){
        throw err
    }
    console.log(data.toString())
})

fs.unlink("./demo1.txt", (err)=>{
    if(err){
        throw err
    }
    console.log("File deleted successfully")
})