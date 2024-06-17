import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Memberform } from './Component/Memberform.jsx'
import { AdminDashBoard } from './Component/AdminDashBoard.jsx'
import { UserDashBoard } from './Component/UserDashBoard.jsx'
import { Registration } from './Component/Registration.jsx'
import { FailedMember } from './Component/FailedMember.jsx'

const router= createBrowserRouter([
  {
      path:"/",
      element:<App/>
  },
  {
      path:"/add",
      element:<Memberform/>
  },
  {
     path:"/update/:memberId",
     element:<Memberform/>
  },
  {
    path:"/admin",
    element:<AdminDashBoard/>
  },
  {
    path:"/user/:email",
    element:<UserDashBoard/>
  },
  {
    path:"/registration",
    element:<Registration/>
  },
  {
    path:"/failedmember",
    element:<FailedMember/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>,
)
