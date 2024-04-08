const db = require('./db')


// get all employees
const allEmployees =()=>{
    return db.Employee.find().then(
        (res)=>{
            if(res){
                return{
                    statusCode : 200,
                    employees : res
                }
            }else{
                return{
                    statusCode:404,
                    message : 'No data found'
                }
            }
        }
    )
}

// add new employee
const addEmployee = (id,uname,age,desg,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'id already exist'
            }
        }else{
            const newEmp = new db.Employee({
                id,
                uname,
                age,
                desg,
                salary
            })

            newEmp.save()

            return{
                statusCode:200,
                message:'New data added '
            }
        }

    })
}

// delete Employee
const removeEmployee=(id)=>{
    return db.Employee.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Data Removed successfully"
            }
        }else{
            return{
                statusCode:404,
                message:"No data found"
            }
        }
    })

}

// get a particular employee details
const getAnEmp = (id)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }else{
            return{
                statusCode:404,
                message:'No data found'
            }
        }
    })


}

// update an empolyeee

const updateEmp =(id,uname,age,desg,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            result.id= id
            result.uname= uname
            result.age=age
            result.desg=desg
            result.salary=salary
            result.save()

            return{
                statusCode:200,
                message:"Data updated successfully"
            }
        }else{
            return{
                statusCode:404,
                message:"No data found"
            }
        }
    })

}

module.exports={
    allEmployees,
    addEmployee,
    removeEmployee,
    getAnEmp,
    updateEmp
}