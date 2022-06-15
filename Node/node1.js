var http = require("http")
http.createServer(function(req, res)
{
    res.write("<h1>Hello World</h1>")
    res.end()
}).listen(3000, ()=>{
    console.log("Server is running on port 3000")
})