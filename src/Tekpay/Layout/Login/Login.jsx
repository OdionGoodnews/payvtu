import React from 'react'
import '../../../Styles/Login.css'
import LoginControll from './LoginControll'
import LoginNavbar from './LoginNavbar'
const Login = () => {
  return (
    <div className='main-login'>
      <LoginNavbar/>
      <div className='container'>
       <div className='col-md-6 m-auto py-5'>
         <LoginControll/>
       </div>
      </div>
    </div>
  )
}

export default Login