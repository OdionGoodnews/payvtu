import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../../Styles/Login.css'
const LoginControll = () => {
  const [toggle, setToggle] = useState();
  const HandleToggle = (index) =>{
     setToggle(!index)
  }
  const navigate = useNavigate();
  return (
    <div>
         <div className='card login-control-section'>
           <div className='py-3'>
           <p className="text-white">Login to access account </p>
             <form>
                <div className="form-group">
                 <label className='text-white'>Email</label>
                  <input type="text" placeholder='johndoe@gmail' className="form-control login-form"/>
                </div>

                <div className="form-group">
                <label className='text-white'>Password</label>
                  <input type={!toggle ? "password" : "text"} placeholder='john1234' className='form-control login-form'/>
                <div className="form-icon" onClick={e =>HandleToggle(toggle)}>
                   {!toggle ? <VisibilityOff className='icon-input'/> : <Visibility className='icon-input'/>}
                </div>
                
                </div>

                <div className="form-group">
                    <button className="btn btn-acess" onClick={e =>navigate('/dashboard')}>Access</button>
                </div>
                <div className='form-group'>
                  <div className='not-have-account'>
                  <div>Not a member <span onClick={e =>navigate('/register')}>register</span> here</div>
                   <div>forgotten password</div>
                  </div>
                </div>

             </form>
           </div>
         </div>
    </div>
  )
}

export default LoginControll