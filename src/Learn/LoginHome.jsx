import axios from 'axios';
import React, {useState} from 'react'
import  {useNavigate} from 'react-router-dom'
const LoginHome = () => {
    const navigate = useNavigate();
    const adminuser = JSON.parse(localStorage.getItem("adminlogin"))
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Handlogin = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(res =>{
          if(res.data.message){
             console.log(res.data)
             localStorage.setItem("adminuser", JSON.stringify(res.data.message))
             navigate('/profile')
          }
          else{
             console.log(res.data)
          }
        
          
        
        })
      }
  return (
    <div>
    
    <form onSubmit={Handlogin}>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    
    </form>
    </div>
  )
}

export default LoginHome