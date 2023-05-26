import React from 'react'
import Navbar from './Navbar'
import '../../Styles/Landing.css'
import leftimage from '../image/img2.png'
import leftimage2 from '../image/img3.png'
import networkproviderlogo from '../image/providers.png'
import DoneIcon from '@mui/icons-material/Done';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { Avatar } from '@mui/material'
import PhoneNav from './PhoneNav'
import {useNavigate} from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate();
  return (
   <div>
     <div className='landing-sector'>
        <Navbar/>
        <PhoneNav/>
        <div className='landing-section'>
            <div className='container'>
              <div className='row'>
              <div className='col-md-6'>
                <div className='landing-text-section'>
                  <h4 className='landing-text'>The payment platform to boost your growth</h4>
                  <p>
                    Reliable and affordable subscription portal for airtime, data and bill payment 
                    and others payment in fast services
                  </p>
                  <button className='btn-get-started' onClick={e=>navigate('/login')}>Get started</button>
                </div>
               </div>

               <div className='col-md-6'>
                 <div className='m-auto d-flex justify-content-center'>
                   <img src={leftimage} className="leftimage"/>
                 </div>
               </div>
              </div>
            </div>
        </div>
    </div>
    <div className='container'>
      <div className='row'>
         <div className='col-md-6'>
         <div className='services-section'>
       <h4>Your <span>preferred</span> payment plug</h4>
       <p>We are here to help you get the best out of your money 
        with a cool user interface.
       </p>
       <div className='service-list-section'>
          <div className='service-list'>
          <div className='icon-border'><DoneIcon/></div>
          <div className="">Airtime and Data</div>
          </div>

          <div className='service-list'>
          <div className='icon-border'><DoneIcon/></div>
          <div className="">Cable Subscription</div>
          </div>


          <div className='service-list'>
          <div className='icon-border'><DoneIcon/></div>
          <div className="">Pay Betting Bill</div>
          </div>

          <div className='service-list'>
          <div className='icon-border'><DoneIcon/></div>
          <div className="">Sell Airtime</div>
          </div>

          <div className='service-list'>
          <div className='icon-border'><DoneIcon/></div>
          <div className="">Bulk Payment</div>
          </div>
       </div>
     </div>
      </div>

      <div className='col-md-6'>
       <div className='service-list-leftimage'>
        <img src={leftimage2} className="imageleft-services"/>
       </div>
      </div>
      </div>
      <div className="servicelogo">
     <div className='logo'>
         <div><img src={networkproviderlogo} className="logoimage"/></div>
     </div>
    </div>
    </div>
    <div className="our-services">
         <div className='container'>
          <div className='col-md-5 m-auto'>
             <h4 className='our-service-text'>Our Services</h4>
             <p className='text-center c'>Pay all your bills at once, without leaving your home with 
              Tekpay's comprehensive range of services.
            </p>
          </div>
          <div>
            <div className='row'>
              <div className='col-md-6  service-card'>
              <div className='card'>
               <div className='card-body'>
                <div className='card-text'>
                 <div className="service-card-list">
                   <div className='icon-service'><Avatar className='avatar-icon'><InstallMobileIcon/></Avatar></div>
                   <div>
                    <span> Secure and Reliable</span>
                    <p className="service-text-tekpay">
                    Your security is our top priority at Tekpay. We use the
                     latest technology to ensure that your personal and financial
                      information is always safe and protected. Our platform is also 
                      reliable, with a seamless payment process that ensures your transactions
                       are processed quickly and accurately.
                       </p>
                   </div>
                 </div>
                </div>
                </div>
            </div>
              </div>

              <div className='col-md-6 service-card '>
              <div className='card'>
               <div className='card-body'>
                <div className='card-text'>
                 <div className="service-card-list">
                   <div className='icon-service'><Avatar className='avatar-icon'><InstallMobileIcon/></Avatar></div>
                   <div>
                    <span> Save Time and Effort</span>
                    <p className="service-text-tekpay">
                    Say goodbye to the tedious task of paying bills.
                     Tekpay streamlines the process, allowing you to
                      make payments with just a few clicks. Plus, our platform
                       is available 24/7, so you can pay your bills whenever and
                        wherever it’s convenient for you.
                      </p>
                   </div>
                 </div>
                </div>
                </div>
            </div>
              </div>

              <div className='col-md-6 service-card'>
              <div className='card'>
               <div className='card-body'>
                <div className='card-text'>
                 <div className="service-card-list">
                   <div className='icon-service'><Avatar className='avatar-icon'><InstallMobileIcon/></Avatar></div>
                   <div>
                    <span> Simplify Your Payments </span>
                    <p className="service-text-tekpay">
                    With Tekpay, you can enjoy a hassle-free
                     payment experience for all your essential bills 
                     and services. We offer a simple, fast, and secure way
                    to pay your utility bills, and even place bets all in one place.
                    </p>
                   </div>
                 </div>
                </div>
                </div>
            </div>
              </div>

              <div className='col-md-6 service-card'>
              <div className='card'>
               <div className='card-body'>
                <div className='card-text'>
                 <div className="service-card-list">
                   <div className='icon-service'><Avatar className='avatar-icon'><InstallMobileIcon/></Avatar></div>
                   <div>
                    <span>Earn Rewards </span>
                    <p className="service-text-tekpay">
                    With Tekpay, you can earn rewards for every successful referral you make. Simply share your referral code with friends and family, and when they sign up and make their first deposit, 
                    you'll both receive a bonus. 
                    </p>
                   </div>
                 </div>
                </div>
                </div>
            </div>
              </div>






            </div>
          </div>
         </div>
     </div>
   </div>
  )
}

export default Landing