import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Memberform = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [membershipExpiry,setmembershipExpiry]=useState("");
    const [doj,setdoj]=useState("");
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
    const {memberId}=useParams();


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

 const validatePhone = (phone) => {
     let formErrors = { ...errors };
     if (!phone) {
         formErrors.phone = 'Phone number is required';
     } else if (phone.length < 10) {
         formErrors.phone = 'Phone number must be at least 10 characters';
     } else {
         delete formErrors.phone;
     }
     setErrors(formErrors);
 };


    const handleSubmit= async(e)=>{
        e.preventDefault();
        const member={name,email,phone,membershipExpiry,doj};
        const response= await axios.get(`http://localhost:8080/api/users/login/${email}`);
        console.log(response.data);
        if(memberId)
            {
                 const result=await axios.put(`http://localhost:8080/api/members/${memberId}`,member);
                 navigate("/admin");
            }
            else
            {
               if(!(response.data === ""))
                {
                  const result=await axios.post("http://localhost:8080/api/members",member);
                  navigate("/admin");
                }
                else{
                    navigate("/failedmember");
                }
                
            }
    }

    useEffect(()=>{
             if(memberId)
                {
                    const getmemberbyid= async()=>{
                           const result=await axios.get(`http://localhost:8080/api/members/${memberId}`);
                           setname(result.data.name);
                           setemail(result.data.email);
                           setphone(result.data.phone);
                           setmembershipExpiry(result.data.membershipExpiry);
                           setdoj(result.data.doj);
                    }

                    getmemberbyid();
                }
    },[])
  return (
     <div className="card  mb-4">
          {memberId?(<h1>Update Details</h1>):(<h1>Add Details</h1>)}
         <div className="card-body">
         <form className="border p-4 rounded" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                   <label className="form-label me-2">Name</label>
                   <input type="text" classNmae="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className="form-group mb-2">
                   <label className="form-label me-2">Phone </label>
                   <input type="text" classNmae="form-control" value={phone} onChange={(e)=>{setphone(e.target.value);validatePhone(e.target.value)}}/>
                   {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
              <div className="form-group  mb-2">
                   <label className="form-label me-2">Email</label>
                   <input type="text" classNmae="form-control" value={email} onChange={(e)=>{setemail(e.target.value);validateEmail(e.target.value)}}/>
                   {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="form-group  mb-2">
                   <label  className="form-label me-2">Date of Joining</label>
                   <input type="date" classNmae="form-control" value={doj} onChange={(e)=>setdoj(e.target.value)}/>
              </div>
              <div className="form-group  mb-2">
                   <label  className="form-label me-2">Membership Expiry</label>
                   <input type="date" classNmae="form-control" value={membershipExpiry} onChange={(e)=>setmembershipExpiry(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
              <Link to="/admin">
                 <button className="btn btn-danger">Cancel</button>
              </Link>
         </form>
         </div>
     </div>
  )
}

