var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var express = require("express")
const e = require("express")
const app = express()
var parser = bodyParser.urlencoded({extended:true})
mongoose.connect('mongodb://localhost:27017/lab-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("Connected to database")
var schema = mongoose.Schema
const employee = mongoose.model('employee_name', new schema({
    fname:String,
    lname:String
}),'employee')


// const e1 = new employee({
//     fname:'Bhavik',
//     lname:'Jain'
// })
// e1.save()


app.get('/',function(req, res){
    res.sendFile(__dirname+'/form.html')
})
app.get('/data', function(req, res){
    employee.find({}, function(err, data){
        if(err)
        {console.log(err)}
        else{
            res.send(data)
        }
    })
})
app.post('/fill-data', parser, function(req, res){
    const data = {
        fname: req.body.fname,
        lname: req.body.lname 
    }
    employee.insertMany(data, function(err, val){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("Entry Added")
        }
    })
    res.redirect("/data")
})
app.listen(3000, ()=>{console.log("Server running on port 3000")})