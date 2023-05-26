import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
const Record = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    axios.get('http://localhost:8081/')
    .then(res =>{
      setData(res.data)
    })
  })
  
  const Handledelete = (id) =>{
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => 
      window.location.reload()
    )
  }
  return (
    <div className='container'>
         <div className='col-md-6 m-auto py-5'>
             <div className='card'>
                <div className='card-body'>
                   <div className='card-text'>
                    <div>
                       <button className='btn btn-success' onClick={e =>navigate('/create')}>create</button>
                    </div>
                       <table className='table table-bordered' style={{marginTop: "20px"}}>
                         <tbody>
                            {data < 1 && <div style={{backgroundColor: "lightgray", padding: "6px", textAlign: "center"}}>No Data</div>}
                            {data.map((item, index) =>{
                              return(
                                <tr key={index}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>
                                       <button className='btn btn-info ms-2'><Link to={`/edit/${item.id}`}>Edit</Link></button>
                                       <button className='btn btn-danger ms-2' onClick={()=>Handledelete(item.id)}>Delete</button>
                                    </td>
                               </tr>
                              )
                            })}
                         </tbody>
                       </table>
                   </div>
                </div>
             </div>
         </div>

    </div>
  )
}

export default Record