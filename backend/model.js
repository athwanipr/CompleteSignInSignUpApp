
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    employeeId:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
});

const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;



