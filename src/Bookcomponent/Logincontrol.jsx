import React, {useState} from 'react'
import '../Styles/Login.css'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Logincontrol = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();
   const HandleLogin = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:8081/login', {email, password})
      .then(res =>{
         if(res.data.success){
          localStorage.setItem("Bookuser", JSON.stringify(res.data.success));
          navigate('/dashboard')
         }
         else{
          toast.error(res.data.message)
         }
      })
   }
  return (
    <div className='col-md-10 m-auto'>
         <div className='card login-card'>
           <div className='card-body'>
             <div className='card-text'>
                <div className=''>
                   Welcome
                </div>
                   <ToastContainer/>
                <form>
                <div className='form-group'>
                    <input type="text" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control"/>
                </div>

                <div className='form-group'>
                    <input type="password" placeholder="Enter passsword" value={password} onChange={e=>setPassword(e.target.value)}  className="form-control"/>
                </div>

                <div className='form-group'>
                    <button className='btn-access' onClick={HandleLogin}>Access</button>
                </div>
                
                  </form>
                  <div className='login-sector'>
                   <div>Not yet a member</div>
                   <div>Forgotten password</div>
                </div>

                

             </div>
           </div>
         </div>
    </div>
  )
}

export default Logincontrol