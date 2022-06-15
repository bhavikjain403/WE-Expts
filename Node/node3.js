var fs = require('fs')
var text = 'HiHello'
fs.readFile('./demo.txt', (err, data)=>{
    if(err){
        throw err
    }
    console.log(data.toString())
})
fs.writeFile('./demo.txt', text, (err)=>{
    if(err)
    {
        throw err
    }
    console.log("File written successfully")
})