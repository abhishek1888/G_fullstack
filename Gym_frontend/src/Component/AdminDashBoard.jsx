import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const AdminDashBoard = () => {
    const [memberList,setmemberlist]=useState([])
    
    const getMemberList = async ()=>{
          const result = await axios.get("http://localhost:8080/api/members");
          setmemberlist(result.data);

    }
    const deletemember= async(memberId)=>{
        const result= await axios.delete(`http://localhost:8080/api/members/${memberId}`);
        getMemberList();
    }

    const isExpiringSoon = (expiryDate) => {
        const currentDate = new Date();
        const expirationDate = new Date(expiryDate);
        const diffTime = Math.abs(expirationDate - currentDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
    }

    useEffect(()=>{
        getMemberList();;
    },[])
  return (
    <div >
    <div className=" d-flex mb-3">
        <div style={{marginLeft:"400px"}}>
            <Link to="/add">
                <div className="btn btn-success me-2">Add</div>
            </Link>
            <Link to="/">
                <button className='btn btn-success'>Go to login</button>
            </Link>
        </div>
    </div>
    <div className="row">
        {
            memberList.map(userdetail => {
                const expiringSoon = isExpiringSoon(userdetail.membershipExpiry);
                return (
                    <div className="col-md-4 mb-4" key={userdetail.memberId}>
                        <div className={`card ${expiringSoon ? 'border-danger' : 'border-success'}`}>
                            <div className="card-body">
                                <h5 className="card-title">{userdetail.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {userdetail.email}</p>
                                <p className="card-text"><strong>Phone:</strong> {userdetail.phone}</p>
                                <p className="card-text"><strong>Date Of Joining:</strong> {userdetail.doj}</p>
                                <p className="card-text"><strong>Membership Expiry:</strong> {userdetail.membershipExpiry}</p>
                                <p className="card-text">
                                    {expiringSoon ?
                                        <span className="text-danger">Expiring Soon</span> :
                                        <span className="text-success">Not Expiring Soon</span>
                                    }
                                </p>
                                <Link to={`/update/${userdetail.memberId}`} className="btn btn-primary mr-2">Update</Link>
                                <button className="btn btn-danger" onClick={() => deletemember(userdetail.memberId)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}
