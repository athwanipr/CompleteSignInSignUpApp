import React from 'react'
import welcomeImg from '../images/welcome.webp';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    let navigate = useNavigate();
    const handleLogout = ()=>{
        
        navigate('/');
    }
  return (
    <>
    {/* <div className="container" height="100px" width="100px"> */}
    <div className="w-50 p-3 text-center">
    <img src={welcomeImg} alt="welcomeImg" className="img-fluid" height="auto" max-width="100px"/>

    </div>
    <div className="container">
    <button type="button" class="btn btn-success btn-lg" onClick={handleLogout}>Logout</button>
    </div>
    
        
    </>
  )
}
