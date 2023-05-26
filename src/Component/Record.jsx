import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../Styles/Record.css'
import Add from './Add'
import {Link, useParams} from 'react-router-dom'
const Record = () => {
    const [data, setData] = useState([])
    const [toggle, setToggle] = useState();
    const HandleAdd = (index) =>{
        setToggle(index)
    }
    useEffect(() =>{
      axios.get(`http://localhost:8081/`)
      .then(res =>{
         console.log(res)
         setData(res.data)
      })
    }, []);
    const HandleDelete = (id, location) =>{
       axios.delete('http://localhost:8081/delete/'+id)
       .then(res =>{
          window.location.reload();
       })

    }
    
  return (
  
    <div className='container col-md-6 py-5'>
       <div className='record-section'>
           <div className='card'>
              <div className='card-body'>
                 <div className='card-text'>
                      <div className='card-item'>
                         <div>student Record</div>
                         <div onClick={e =>HandleAdd(!toggle)}>{!toggle ? "add +" : "cancel"}</div>
                      </div>
                      <div className='table-item'>
                          {!toggle ? 
                           <table className='table'>
                           <tbody>
                                {data < 1 && <div>No Record</div>}
                                
                                   {data.map((item,index) =>{
                                      return(
                                         <tr key={index}>
                                           <td>{item.id}</td>
                                           <td>{item.name}</td>
                                           <td>{item.email}</td>
                                           <td>
                                             <button className='btn btn-info ms-2'><Link to={`/view/${item.id}`}>View</Link></button>
                                              <button  className='btn btn-info ms-2'><Link to={`/edit/${item.id}`}>Edit</Link></button>
                                              <button onClick={() =>HandleDelete(item.id)} className='btn btn-danger ms-2'>Delete</button>
                                           </td>
                                         </tr>
                                         
                                      )
                                   })}
                                
                           </tbody>
                      </table>
                           
                          : <Add/>}
                      </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Record