import React, {useState} from 'react'
import { AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, Cancel, Dashboard, DashboardOutlined, Menu, Settings, SettingsOutlined } from '@mui/icons-material'
import '../../Styles/Home.css'
import profileimage from '../image/Goodness 1 (1).png'
import {useNavigate} from 'react-router-dom'
import HomeItem from './HomeItem'
// import PhoneSidebar from './PhoneSidebar'
const Home = () => {
   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true)
  return (
    <div className="dashboard-section">
        <div className='dashboard-navbar shadow'>
            <div>
                 <h5>Tekpay</h5>
            </div>
            <div>
                <p>Odion Goodnews</p>
                <img src={profileimage} className="profile-image"/>
            </div>    
        </div>
        <div className='phone shadow'>
          <div className='phone-nav-item container'>
          <div>
          <img src={profileimage} className="profile-image"/>
          </div>
          <div className="phoneNav-icon">{toggle ? <Menu onClick={e =>setToggle(!toggle)}/> : <Cancel onClick={e =>setToggle(!toggle)}/>}</div>
          
          </div>
            {/* <PhoneSidebar toggle={!toggle}/> */}
        </div>
        
        <div className="row">
           <div className='col-md-3'>
           <div className='sidebar shadow'>
              <div className='side-item m-auto jus' >
                
              <div className='sidebar-item-icon active' onClick={e => navigate('/dashboard')}>< Dashboard/> Home</div>
               <div className='sidebar-item-icon ' onClick={e => navigate('/topup')}>< AssignmentOutlined/> Airtime topup</div> 
                <div className='sidebar-item-icon' ><BorderColorOutlined/> Data topup</div>
                <div className='sidebar-item-icon'>< AssessmentOutlined/>electricity Bill</div>
                <div className='sidebar-item-icon'>< DashboardOutlined/> Betting Bill</div>
                <div className='sidebar-item-icon' onClick={e =>navigate("/Setting")}>< SettingsOutlined/> Setting</div>
              </div>
            </div>
           </div>
           <div className='col-md-9'>
                <div className='container'>
                <div className='left-sector'>
                  <HomeItem/>
              </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Home