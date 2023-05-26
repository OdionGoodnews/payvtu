import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, {useState} from 'react'
import '../../../Styles/Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const AccountControll = () => {
    const navigate = useNavigate();
    const [g, setG] = useState()  
    const [x, setX] = useState();
     const [formData, setFormData] = useState({
         email: "",
         name: "",
         password: "",
         confirmpassword: ""
     })
     const HandleRegister = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:8081/register', formData)
      .then(res=>{
        console.log(res.data)
       if(res.data.success){
        setX(res.data.success)
       }
       else{
        setG(res.data.message)
       }
      })
     }
  
  return (
    <div>
         <div className='card login-control-section'>
           <div className='py-3'>
           <p className="text-white">Create an account </p>
            {!x ? null
             :
             <p className='alert alert-danger' >{x ? "success" : "goodnews"}</p> 
           }
             <form>
                <div className="form-group">
                 <label className='text-white'>Email</label>
                  <input type="text" placeholder='johndoe@gmail' value={formData.email} onChange={e =>setFormData({...formData, email:e.target.value})} className="form-control login-form"/>
                </div>

                <div className="form-group">
                <label className='text-white'>Full Name</label>
                  <input type="text" placeholder='john1234' value={formData.name} onChange={e =>setFormData({...formData, name:e.target.value})} className='form-control login-form'/>
                </div>

                <div className="form-group">
                <label className='text-white'>Password</label>
                  <input type="text" placeholder='john1234' value={formData.password} onChange={e =>setFormData({...formData, password:e.target.value})} className='form-control login-form'/>
                </div>
                <div className="form-group">
                <label className='text-white'>Confirm password</label>
                  <input type="text" placeholder='john1234' value={formData.confirmpassword} onChange={e =>setFormData({...formData, confirmpassword:e.target.value})} className='form-control login-form'/>
                </div>

                <div className="form-group">
                    <button className="btn-register" onClick={HandleRegister}>Register</button>
                </div>
                <div className='form-group'>
                  <div className='not-have-account'>
                  <div>Already have an account?<span onClick={e =>navigate('/login')}>Login</span></div>
                  </div>
                </div>

             </form>
           </div>
         </div>
    </div>
  )
}

export default AccountControll