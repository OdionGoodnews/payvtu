import React, {useState} from 'react'
import '../Styles/Landing.css'
import Logincontrol from './Logincontrol'
import Register from './Register'
const Landing = () => {
  const [toggle, setToggle] = useState('')
  const HandleToggle = (index) =>{
   setToggle(index)
  }
  return (
    <div className='landing-section'>
       <div className='row '>
         <div className='col-md-6 '>
           <div className='side'>
              <div className='side-item'>
              <div className='side-text'>
                  Amazun Book
               </div>
               <p>Home of Books</p>
               <div className='create-account' onClick={e =>HandleToggle(!toggle)}>
                 {toggle ? "Login"  : "  Create account  "}
               </div>
              
              </div>
           </div>
         </div>
         <div className='col-md-6'>
           {toggle ? <Register/>  : <Logincontrol/>}
         </div>
       </div>
    </div>
  )
}

export default Landing