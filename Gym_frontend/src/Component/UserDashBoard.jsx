import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const UserDashBoard = () => {
   const [userdetail,setuserdetail]=useState({});
   const {email} =useParams();


   const isExpiringSoon = (expiryDate) => {
    const currentDate = new Date();
    const expirationDate = new Date(expiryDate);
    const diffTime = Math.abs(expirationDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
}

   useEffect(()=>{
        
        const getuserdetails=async()=>{
            const result= await axios.get("http://localhost:8080/api/members");

            const member = result.data.find(member => member.email === email);

            if (member) {
              setuserdetail(member);
            } else {
              
              setuserdetail(null);
            }
        }
        getuserdetails();
   },[])
   
  return (
    <div>
    <Link to="/">
        <button className='btn btn-success'>Go to login</button>
    </Link>
    {userdetail!=null?(
    <div className="mt-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{userdetail.name}</h5>
                <p className="card-text"><strong>Email:</strong> {userdetail.email}</p>
                <p className="card-text"><strong>Phone:</strong> {userdetail.phone}</p>
                <p className="card-text"><strong>Date Of Joining:</strong> {userdetail.doj}</p>
                <p className="card-text"><strong>Membership Expiry:</strong> {userdetail.membershipExpiry}</p>
                <p className="card-text">
                    {isExpiringSoon(userdetail.membershipExpiry) ? 
                        <span className="text-danger">Expiring Soon</span> : 
                        <span className="text-success">Not Expiring Soon</span>
                    }
                </p>
            </div>
        </div>
    </div>
    ):(
      <div className="card">
            <div className="card-body">
              <h1>ASK ADMIN TO REGISTER YOU AS A MEMBER</h1>
            </div>
      </div>
      )
   }
</div>
  )
}
