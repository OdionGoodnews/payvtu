import React from 'react'
import '../../../Styles/Login.css'
import {Brightness2, Nightlight} from '@mui/icons-material'
const LoginNavbar = () => {
  return (
    <div className='login-section'>
       <div className='container login-navbar'>
       <div>Tekpay</div>
       <div><Nightlight/></div>
       <div>Create Account</div>
       </div>
    </div>
  )
}

export default LoginNavbar