import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
    const [item, setItem] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() =>{
       axios.get('http://localhost:8081/view/'+id)
       .then(res =>{
         console.log(res.data[0])
         setValues({...values, email: res.data[0].email, name: res.data[0].name})
       })
    }, [])
    const [values, setValues] = useState({
        email: '',
        name: '' 
    });
    const [msg, setMsg] = useState();
    const HandleAdd = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
        .then(res =>{
             console.log(res.data)
             setMsg(res.data.message)
             console.log(res.data.message)
             window.location.reload();
        })
    }
    const HandleUpdate = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/update/'+id, values)
        .then(res =>{
            console.log(res.data)
            navigate('/')
        })

    }
  return (
    <div className='container col-md-5 py-5'>
         <form>
             <div className='form-group'>

                 <input type='text' placeholder='Enter Email' value={values.email}  onChange={e =>setValues({...values, email:e.target.value})} className="form-control" />
             </div>
             <div className='form-group'>
                 <input type='text' placeholder='Enter Name' value={values.name} onChange={e =>setValues({...values, name:e.target.value})} className="form-control" />
             </div>
             

             <div className='form-group'>
                 <button className='btn btn-success' onClick={HandleUpdate}>Update</button>
             </div>
         </form>
    </div>
  )
}

export default Edit