import React from 'react'
import '../../Styles/Dashhome.css'
import data from '../Dummy'
import {Navigate} from 'react-router-dom'
const Home = () => {
    const user = JSON.parse(localStorage.getItem("Bookuser"))
    if(!user){
       return <Navigate to="/"/>
    }
  return (
    <div className='dash-section'>
         <div className='row'>
            <div className='col-md-3 sidebar shadow'>
                <div>
                    <h5 className='amazun-book'>AMAZUN BOOKS</h5>
                </div>

                <div className='side-item'>
                   <li>Home</li>
                   <li>Book</li>
                   <li>Post</li>
                   <li>Transaction</li>
                   <li>Track Your Order</li>
                </div>
            </div>


            <div className='col-md-9'>
                <div className='Dasheader shadow'>
                  <div className='dashheader-nav'>
                  <div>Good afternoon</div>
                   <div>Logout</div>
                  </div>
                </div>
                <div className='container'>
                <div className='row' >
                   {data.map(item =>(
                     <div className='col-md-4'>
                        <div className='card card-book'>
                           <div className='card-body'>
                            <div className='card-text'>
                               <img src={item.img} className="img-card"/>
                            </div>
                            <div className='text-center'>{item.title}</div>
                            <button className='btn-buy-book'>Buy</button>
                            </div>
                        </div>
                     </div>
                   ))} 
                </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Home