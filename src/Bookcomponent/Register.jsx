import React, {useState} from 'react'
import '../Styles/Login.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });
  
  const [value, setValue] = useState({
     email: "",
     name: "",
     telephone:"",
     gender: "",
     password: "",
     confirmpassword: ""
  })
  const HandleRegister = (e) =>{
    e.preventDefault();
   axios.post('http://localhost:8081/Register', value)
   .then(res =>{
    if(res.data.success){
      toast.success(res.data.success, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover:true
      })
    }
    else{
      toast.error(res.data.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover:true
      })
    }
    
     
    
   })
  }
  
 
  return (
    <div className='col-md-10 m-auto'>
         <div className='card register-card'>
           <div className='card-body'>
             <div className='card-text'>
                <div className=''>
                <ToastContainer />
                 Create an account
            
                </div>

                <form>
                <div className='form-group'>
                    <input type="text" value={value.email} onChange={e=>setValue({...value, email: e.target.value})} placeholder="Enter email" className="form-control" required={true}/>
                </div>

                <div className='form-group'>
                    <input type="text" value={value.name} onChange={e=>setValue({...value, name: e.target.value})} placeholder="Enter Name" className="form-control" required={true}/>
                </div>

                <div className='form-group'>
                    <input type="text" value={value.telephone} onChange={e=>setValue({...value, telephone: e.target.value})} placeholder="Enter Telephone" className="form-control" required={true}/>
                </div>
                <div className='form-group'>
                    <select className='form-control' value={value.gender} onChange={e=>setValue({...value, gender: e.target.value})} required={true}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>OThers</option>
                    </select>
                </div>

                <div className='form-group'>
                    <input type="password" value={value.password} onChange={e=>setValue({...value, password: e.target.value})} placeholder="Enter passsword" className="form-control" required={true}/>
                </div>
                <div className='form-group'>
                    <input type="password" value={value.confirmpassword} onChange={e=>setValue({...value, confirmpassword: e.target.value})} placeholder="Enter Re-password" className="form-control" required/>
                </div>

                <div className='form-group'>
                    <button className=' btn-access' onClick={HandleRegister}>Create account</button>
                </div>
             

                </form>
                

             </div>
           </div>
         </div>
    </div>
  )
}

export default Register