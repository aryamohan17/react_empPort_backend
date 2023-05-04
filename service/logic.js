const db = require('./db')

const allEmployee=()=>{
   return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"data not in database"
            }
        }
    })
}
const addEmployee=(id,uname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:400,
                message:"EMployee already exist"
            }
        }
        else{
            const newEmp=new db.Employee({
                id,uname,age,designation,salary
            })
            newEmp.save()
            return{
                statusCode:200,
                message:"Employee added sucessfully"
            }
        }
    })
}
const removeEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"employee sucessfully deleted"
            }
        }
        else
        {
            return{
                statusCode:400,
                message:"employee not exist"
            }
        }
    })
}
const getEmp=(id)=>{
   return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"employee not present"
            }
        }
    })
}
const editEmp = (id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.age=age
            result.designation=desig
            result.salary=salary

            result.save()
            return{
                statusCode:200,
                message:"Employee data updated"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Data not exist"
            }
        }
    })
}


const registerEmp=(username,password,Email)=>{
    return db.Register.findOne({Email}).then(result=>{
        if(result){
            return{
                status:false,
                statusCode:404,
                message:"User already exist"
            }
        }
        else{
            const newUser = new db.Register({username,password,Email})
            newUser.save()
            return{
                status:true,
                statusCode:200,
                message:"Sucessfully register"
            }
        }
    })
}

const login =(Email,password)=>{
    return db.Register.findOne({Email,password}).then(result=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"login sucessfully"
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:"email id or password incorrect"
            }
        }
    })
}

module.exports={
    allEmployee,addEmployee,removeEmployee,getEmp,editEmp,registerEmp,login
}