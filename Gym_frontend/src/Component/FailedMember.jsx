import React from 'react'
import { Link } from 'react-router-dom'

export const FailedMember = () => {
  return (
    <div><div className="card">
        <div className="card-body">
        <h1>First Register Yourself</h1>
        </div>
        </div>
        <Link to="/">
        <button className="btn btn-primary">Go to Login</button>
        </Link>
    </div>
  )
}
