import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '../imag/20206.jpg'
function Images() {
  const [image, setFile] = useState(null);
  const [data, setData] = useState([])
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    axios.post('http://localhost:8081/upload-image', formData)
    .then(res =>{
      console.log(res.data)
    
    })
  };

  useEffect(() =>{
    
  }, [])
  axios.get('http://localhost:8081/fetchall')
    .then(res =>{
       console.log(res.data[0])
       setData(res.data)
    })
  return (
    <>
       <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
    <>
       
    </>

      <table className='table table-bordered'>
         <thead>
           <tr>
           <th>ID</th>
           <th>Image</th>
           </tr>
         </thead>
         <tbody>
             {data.map((item, index) =>{
               return(
                 <tr key={index}>
                   <td>{item.id}</td>
                   <td><img src={item.image} height={200} /></td>
                 </tr>
               )
             })}
         </tbody>
      </table>
      
     </>
  );
}

export default Images;
