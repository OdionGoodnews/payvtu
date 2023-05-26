import axios from 'axios';
import React, {useState} from 'react'
const Add = () => {
    const [value, setValue] = useState({
        email: "",
        name: ""
    });
    const [msg, setMsg] = useState();
    const HandleAdd = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/student', value)
        .then(res =>{
             console.log(res.data)
             setMsg(res.data.message)
             console.log(res.data.message)
             window.location.reload();
        })
    }
  return (
    <div>
         <form>
             <div className='form-group'>
                {msg}
                 <input type='text' placeholder='Enter Email'  onChange={e =>setValue({...value, email:e.target.value})} className="form-control" />
             </div>
             <div className='form-group'>
                 <input type='text' placeholder='Enter Name' onChange={e =>setValue({...value, name:e.target.value})} className="form-control" />
             </div>

             <div className='form-group'>
                 <button className='btn btn-success' onClick={HandleAdd}>Add user</button>
             </div>
         </form>
    </div>
  )
}

export default Add