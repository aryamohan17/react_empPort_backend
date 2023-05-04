const express = require('express')
const logic = require('./service/logic') 
const server = express()
const cors = require('cors')
server.use(cors({origin:'http://localhost:3000'}))
// more url exist then array use  server.use(cors({origin:[,'http://localhost:3000','http://localhost:3500']}))
server.use(express.json())
server.listen(8000,()=>{
    console.log("server start at 8000");
})
server.get('/getAllEmployee',(req,res)=>{
    logic.allEmployee().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getemployee/:id',(req,res)=>{
    logic.getEmp(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/editEmp',(req,res)=>{
    logic.editEmp(req.body.id,req.body.uname,req.body.age,req.body.desig,req.body.salary).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/registerEmployee',(req,res)=>{
    logic.registerEmp(req.body.username,req.body.password,req.body.Email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/loginEmployee',(req,res)=>{
    logic.login(req.body.Email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})