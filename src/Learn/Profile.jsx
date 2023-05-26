import React from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('adminuser'))
    if(!user){
        return <Navigate to="/"/>
    }
    const HandleLogout = (e) =>{
      e.preventDefault();
      localStorage.removeItem("adminuser")
      navigate('/loginhome')
    }
  return (
    <div>Profile
         <p>{user.id}</p>
         <p>{user.password}</p>
         <p>{user.email}</p>
         <button onClick={HandleLogout}>Logout</button>
    </div>
  )
}

export default Profile