const mongoose = require('mongoose');
const Employee = require('./model');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8080;

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});


app.get('/', (req, res) => {
    res.send("Welcome User");
});


app.get('/login', async (req, res) => {
    const employeeId = req.query.employeeId;
    const employee = await Employee.findOne({ employeeId });
    if (employee) {
        res.status(200).json(employee);
    }
    else {
        res.status(404).json({ error: "Employee Not Found" });
    }
})

app.post('/signup', async (req, res) => {

    const employeeId = req.query.employeeId;
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;

    if (await Employee.findOne({ employeeId })) {
        res.send({ message: "This Employee Id is already registered" });
    }

    if (await Employee.findOne({ email })) {
        res.send({ message: "Email Id is already registered" });
    }

    
else{
    const employee = new Employee({
        name: name,
        employeeId: employeeId,
        email: email,
        password: password
    });

    employee.save()
        .then(() => {
            console.log("Employee details saved");
            res.send({ code:"1", message: "Successfully Registered, Please login now." });
        })
        .catch((err) => {
            res.send({ message: "Invalid Input" })
        })
}
    

})

mongoose.connect('mongodb://localhost:27017/employees')
    .then(() => {
        console.log("connected");
    })
    .catch((e) => {
        console.log("error occurrred");
    });

    // const employee = new Employee({
    //         name:"Priyanka Athwani",
    //         employeeId:11003375,
    //         email:"ae.athwani@gmail.com",
    //         password:"12345678"
    // });

//     const employee = new Employee({
//         name:"Rohan",
//         employeeId:11111111,
//         email:"rohan@gmail.com",
//         password:"12345678"
// });

    // employee.save()
    // .then(()=>{
    //     console.log("Employee details saved");
    // })
    // .catch((err)=>{
    //     console.log("error");
    // })

