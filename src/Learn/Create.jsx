import axios from 'axios'
import React, {useState} from 'react'
import '../Styles/Record.css'
const Create = () => {
     const [values, setValues] = useState({
       email: "",
       name: ""
     })
     const handleAdd = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/adduser', values)
        .then(res =>{
            console.log(res.data);
        })
     }
  return (
    <div>
          <div className='container'>
         <div className='col-md-5 m-auto py-5'>
             <div className='card'>
                <div className='card-body'>
                   <div className='card-text'>
                      <form>
                         <div className='form-group'>
                             <input type="text" placeholder="Enter email" onChange={e =>setValues({...values, email: e.target.value})} className="form-control"/>
                         </div>
                         <div className='form-group'>
                             <input type="text" placeholder="Enter name" onChange={e =>setValues({...values, name: e.target.value})} className="form-control"/>
                         </div>
                         <div className='form-group'>
                             <button className='btn btn-success' onClick={handleAdd}>Add user</button>
                         </div>
                      </form>     
                   </div>
                </div>
             </div>
         </div>

    </div>
    </div>
  )
}

export default Create





