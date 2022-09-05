import React from 'react'
import logo from '../images/logo2.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Login() {

    let navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log("Form is submitted");
    }

    const handleSignup = ()=>{
        navigate('./signup');
    }

    const handleSignin = async (e) => {
        e.preventDefault();
        //console.log("Signin clicked");

        const employeeId = document.querySelector('#employeeId').value;
        const password = document.querySelector("#password").value;

        console.log(employeeId+"     " +password);

        try {
            const response = await axios({
                method: "get",
                url: "http://localhost:8080/login/",
                params: { employeeId }
            });
            console.log(response);
            if (password === response.data.password) {
                
                navigate('./Dashboard');
            }
            else {
                alert("Invalid Password");
            }
        }
        catch (error) {
            //console.log("employee not found");
            alert("Please enter valid SAP ID");
        }
    }

    return (
        <div className="container my-5">
            <main className="form-signin w-50 m-auto">
                <form >
                    <div className="image text-center my-4">
                        <img className="img-tag" src={logo} alt="uppcl-logo" width="100" height="100" />
                    </div>

                    <h1 className="h3 mb-3 fw-normal text-center">Signin/Signup App</h1>

                    <div className="form-floating">
                        <input type="id" className="form-control my -4" id="employeeId" placeholder="SAP ID" />
                        <label htmlFor="employeeId">SAP ID</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control my-4" id="password" placeholder="Password" />
                        <label htmlFor="Password">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignin}>Sign in</button>
                    <button className="w-100 btn btn-lg btn-primary my-4" type="submit" onClick={handleSignup}>Sign up</button>
                </form>
            </main>
        </div>
    )
}
