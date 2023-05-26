import React from 'react'
import '../../../Styles/Login.css'
import LoginNavbar from '../Login/LoginNavbar'
import AccountControll from './AccountControll'
const Account = () => {
  return (
    <div className='main-login'>
      <LoginNavbar/>
      <div className='container'>
       <div className='col-md-6 m-auto py-5'>
         <AccountControll/>
       </div>
      </div>
    </div>
  )
}

export default Account