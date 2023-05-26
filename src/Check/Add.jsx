import axios from 'axios'
import React,{useState} from 'react'

const Add = () => {
    const [formdata, setFormData] = useState({
        email: "",
        name: ""
    })
  const HandleRegister = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/addpost', formdata)
    .then(res =>{
        console.log(res.data)
    })
  }
  return (
    <div>
         <div className='col-md-5 m-auto py-5'>
              <div className='card'>
                <div className='card-body'>
                    <div className='card-text'>
                     <form>
                         <div className='form-group'>
                             <input type="text" placeholder='Enter email' className='form-control' value={formdata.email} onChange={e =>setFormData({...formdata, email:e.target.value})} />
                         </div>
                         <div className='form-group'>
                             <input type="text" placeholder='Enter name' className='form-control' value={formdata.name} onChange={e =>setFormData({...formdata, name:e.target.value})} />
                         </div>
                         <div className='form-group'>
                             <button className='btn btn-success' onClick={HandleRegister}>Register</button>
                         </div>
                     </form>
                    </div>
                </div>
              </div>
         </div>
    </div>
  )
}

export default Add