import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Signup() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log("Form is submitted");
    }

    let navigate = new useNavigate();

    const handleSignupFinally = async (e) => {
        e.preventDefault();
        const employeeId = document.querySelector('#employeeId').value;
        const name = document.querySelector('#name').value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if( name   && password && employeeId && email ){
            // console.log(name)
            
        
            axios({
                method: 'post',
                url: 'http://localhost:8080/signup/',
                params: { employeeId,name,email,password }
              }) 
               .then( res => {
                alert(res.data.message);
                if(res.data.code ==1){
                    navigate('/');
                }
                
            }).catch(()=>{

            })
              
        } else {
            alert("Invalid Input");
        }
   
    }

    return (
        <>
            <div className="container my-5">
                <main className="form-signin w-50 m-auto">
                    <form >


                        <h1 className="h3 mb-3 fw-normal text-center">SignUp Form</h1>

                        <div className="form-floating">
                            <input type="id" className="form-control my -4" id="employeeId" placeholder="SAP ID" />
                            <label htmlFor="employeeId">SAP ID</label>
                        </div>
                        <div className="form-floating">
                            <input type="name" className="form-control my-4" id="name" placeholder="Name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control my-4" id="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control my-4" id="password" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>



                        <button className="w-100 btn btn-lg btn-primary my-4" type="submit" onClick={handleSignupFinally}>Submit</button>

                    </form>
                </main>
            </div>
        </>

    )
}
