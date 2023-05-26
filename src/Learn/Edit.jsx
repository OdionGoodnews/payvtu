import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
const Edit = () => {
  const params = useParams();
  const {id} = useParams();
  const [msg, setMsg] = useState();
  useEffect(() =>{
    axios.get('http://localhost:8081/view/'+id)
    .then(res =>{
      setValues({...values, email:res.data[0].email, name: res.data[0].name})
    })
  }, []);
  
  const [values, setValues] = useState({
    email: "",
    name: ""
 })
  
  const handleUpdate = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/update/'+id, values)
    .then(res =>{
      console.log(res.data)
      setMsg(res.data.message);
      
    })
  }
  const [search, setSearch] = useState('')
  const Handlesearch = (e)=>{
    e.preventDefault();
    axios.get(`http://localhost:8081/${search}/`+id)
    .then(res =>{
       console.log(res.data)
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
                        {!msg ? null : <p className='alert alert-success'>{msg}</p>}
                         <div className='form-group'>
                             <input type="text" placeholder="Enter email" value={values.email} onChange={e =>setValues({...values, email: e.target.value})} className="form-control"/>
                         </div>
                         <div className='form-group'>
                             <input type="text" placeholder="Enter name" value={values.name} onChange={e =>setValues({...values, name: e.target.value})} className="form-control"/>
                         </div>
                         <div className='form-group'>
                             <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                         </div>
                      </form>     
                   </div>
                </div>
                <form>
                    <div className='form-group'>
                       <input type="text" value={search} onChange={e =>setSearch(e.target.value)} className="form-control" placeholder="enter Id"/>
                    </div>
                    <div className='form-group'>
                        <button  className='btn btn-success' onClick={Handlesearch}>Search</button>
                    </div>
                </form>
             </div>
         </div>

    </div>
    </div>
  )
}

export default Edit