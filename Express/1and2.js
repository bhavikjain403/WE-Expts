const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get('/about', function(req, res){
    res.send("My name is Bhavik Jain")
})
app.get('/contact', function(req, res){
    res.send("Contact me at bhavik@gmail.com")
})
app.post('/', function(req, res){
    var fname = req.body.Fname
    var lname = req.body.Lname
    res.send("First Name is "+fname+" and Last name is "+lname)
})
app.listen(3000, ()=>{console.log("Server running on port 3000")})