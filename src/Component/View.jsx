import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const View = () => {
    const {id} = useParams()
    const [item, setItem] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8081/view/'+id)
        .then(res =>{
            console.log(res.data)
            setItem(res.data[0])
        })
    }, [])
  return (
    <div>
         <div className='container col-md-6 py-5'>
       <div className='record-section'>
           <div className='card'>
              <div className='card-body'>
                 <div className='card-text'>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                 </div>
              </div>
           </div>
       </div>
    </div>
    </div>
  )
}

export default View