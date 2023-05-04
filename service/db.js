const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ems',{useNewUrlParser:true})

//model
const Employee =mongoose.model('Employee',{
    
id:String,
uname:String,
age:Number,
designation:String,
salary:Number
})

const Register = mongoose.model('Register',{
    username:String,
    password:String,
    Email:String
})

module.exports={
    Employee,Register
}