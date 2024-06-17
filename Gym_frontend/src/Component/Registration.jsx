import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Registration = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername] =useState("");
    const [admin,setAdmin]=useState(false);
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

    const validateUserName = (username) => {
        let formErrors = { ...errors };
        if (!username) {
            formErrors.username = 'Username is required';
        } else if (username.length < 6) {
            formErrors.username = 'Username must be at least 6 characters';
        } else {
            delete formErrors.username;
        }
        setErrors(formErrors);
    };

    const handleSubmit= async(e)=>{
            e.preventDefault();
            const user={email,password,username,admin};
            const result= await axios.post(`http://localhost:8080/api/users/register`,user);
            navigate("/");
    }


  return (
    <div>
    <div className="card">
        <div className="card-body">
            <h1> Register </h1>
            <form className="border p-4 rounded" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value);validateUserName(e.target.value)}}
                    className="form-control"
                    placeholder="Enter username"
                    required
                />
                {errors.username && <div className="text-danger">{errors.username}</div>}
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value);validatePassword(e.target.value)}}
                    className="form-control"
                    placeholder="Enter password"
                    required
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value);validateEmail(e.target.value)}}
                    className="form-control"
                    placeholder="Enter email"
                    required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group mb-2">
                <label className="form-check-label">
                    <input
                        type="checkbox"
                        checked={admin}
                        onChange={() =>setAdmin(!admin)}
                        className="form-check-input"
                    />
                    Admin
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <Link to="/">
                 <button className='btn btn-primary ms-2'>Go to login</button>
          </Link>
        </form>
        </div>
    </div>
</div>
  )
}
