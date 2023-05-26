import React, {useState} from 'react'
import {Add, Apps, BarChart, BusinessCenter, Dialpad, Groups2, Hub, People, Visibility, } from '@mui/icons-material'
import { AppBar } from '@mui/material';
const HomeItem = () => {
   const [toggle, setToggle] = useState();
   const HandleToggle = (index) =>{
     setToggle(!index)
   }
  return (
    <div>
        <div className='row'>
             <div className='col-md-4'>
                 <div className='card card-account'>
                    <div className='card-body'>
                         <div className='card-text'>
                            <div className='home-account'>
                            <div>
                                <p>Balance</p>
                                <p>{!toggle ? "$0.00" : <p className='ash'>***</p>}</p>
                            </div>
                            <div onClick={e =>HandleToggle(toggle)}>
                               <Visibility className="accoount-visible-icon"/>
                            </div>
                            <div>
                                Deposit <Add/>
                            </div>
                            </div>
                         </div>
                    </div>
                 </div>
             </div>


             <div className='col-md-4'>
                 <div className='card card-account'>
                    <div className='card-body'>
                         <div className='card-text'>
                            <div className='home-refer'>
                               <div>
                                 <div><Groups2/></div>
                                 <p>share fund</p>
                               </div>

                               <div>
                                 <div><People/></div>
                                 <p>Be agent</p>
                               </div>

                               <div>
                                 <div><Hub/></div>
                                 <p>Referral Link</p>
                               </div>
                            </div>
                         </div>
                    </div>
                 </div>
             </div>

             <div className='col-md-4'>
                 <div className='card card-account'>
                    <div className='card-body'>
                         <div className='card-text'>
                            <div className='home-refer'>
                               <div>
                                 <div><BarChart/></div>
                                 <p>Bulk Data</p>
                               </div>

                               <div>
                                 <div><Dialpad/></div>
                                 <p>Price List</p>
                               </div>

                               <div>
                                 <div><BusinessCenter/></div>
                                 <p>Own VTU</p>
                               </div>
                            </div>
                         </div>
                    </div>
                 </div>
             </div>
             <div className='col-md-12'>
               <div className='tekpay-home-referral'>
                  <p>
                    Copy your paytek referral link and share with your family and friends and earn 1%
                    upon their completed transactions, you can also earn $500 bonus when your referral become
                    agent.
                  </p>
               </div>
             </div>
        </div>
    </div>
  )
}

export default HomeItem