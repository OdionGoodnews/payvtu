// import React, { useState } from 'react';
// import axios from 'axios';
// import {json, useNavigate} from 'react-router-dom'

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//  const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const param = {email, password}
//     axios.post('http://localhost:8081/login', param)
//       .then(response => {
//         if (response.data.success) {
//            localStorage.setItem("adminlogin", JSON.stringify(param))
//            navigate('/loginhome')
//         } else {  
//           alert('Invalid email or password');
//         }
//       })
//       .catch(error => console.log(error));
//   };

//   //  const HandleRegister = (e) =>{
//   //   e.preventDefault();
//   //   axios.post('http://localhost:8081/register', {email})
//   //   .then(res =>{
//   //     console.log(res.data)
//   //   })
//   //  }

//    return (
//           <div className='container'>
//              <div className='div m-auto' >
//                 <div className='row'>
//                    <div className='col-md-5'>
//                     <form onSubmit={handleSubmit}>
//                       <input type="text" value={email} className="form-control" onChange={(event) => setEmail(event.target.value)} />
//                       <input type="password" value={password} className="form-control" onChange={(event) => setPassword(event.target.value)} />
//                       <button type="submit">Login</button>
//                     </form>
//                    </div>

//                     {/* <div className='col-md-4'>
//                     <form onSubmit={HandleRegister}>
//                       <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
//                       <button type="submit">Register</button>
//                     </form>
//                    </div> */}

//                 </div>
//              </div>
//           </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userid, setUserId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', {email, password })
    .then(res =>{
         console.log(res.data);
    })
      
    }
  const Handlefetch = (e) =>{
    e.preventDefault();
    axios.get(`http://localhost:8081/user/${userid}`)
    .then(res =>{
       console.log(res.data)
    })
  }
  const user = JSON.parse(localStorage.getItem('useradmin'))

  return (
   <>
      <form onSubmit={handleSubmit}>
        {user.id}
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Register</button>
    
    </form>

    <form>
        <div className='form-group'>
           <input type="text" placeholder="Enter Id" value={userid} onChange={e =>setUserId(e.target.value)}/>
           <button onClick={Handlefetch}>fetch</button>
        </div> 
    </form>


    
   </>

    
  );
}

export default Login;

