import axios from 'axios';
import React, { useState } from 'react'

import { Link, useNavigate} from 'react-router-dom';

export const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
   
    const validateEmail = (email) => {
        let formErrors = { ...errors };
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
        } else {
            delete formErrors.email;
        }
        setErrors(formErrors);
    };
    const validatePassword = (password) => {
        let formErrors = { ...errors };
        if (!password) {
            formErrors.password = 'Password is required';
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        } else {
            delete formErrors.password;
        }
        setErrors(formErrors);
    };
  
    const handleSubmit= async (e)=>{
            e.preventDefault();
            const result= await axios.get(`http://localhost:8080/api/users/login/${email}`);
            const admindata=result.data.admin;
            if (admindata===true) {
              navigate('/admin'); 
            }
           else {
               navigate(`/user/${email}`); 
            }
         
      }
        
             
    
    
  return (
    <div>
        <div className="card">
            <div className="card-body">
                <h1> Login</h1>
                <form className="border p-4 rounded" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value);validateEmail(e.target.value)}}/>
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value);validatePassword(e.target.value) }}/>
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div>
                         <button className="btn btn-primary" type="submit">
                            Submit
                         </button>
                    </div>
                </form>
                <Link to="/registration">
                   <h5> Create account</h5>
                </Link>
            </div>
        </div>
           
    </div>
  )
}
