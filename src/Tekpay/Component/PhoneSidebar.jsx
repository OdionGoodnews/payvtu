import { AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, DashboardOutlined, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import '../../Styles/Phonenav.css'
import {useNavigate} from 'react-router-dom'
const PhoneSidebar = ({toggle}) => {
    const navigate = useNavigate();
  return (
    <div>
         {toggle && (
            <div className='col-md-6 m-auto'>
                  <div className='minphonenav'>
                <div className='sidebar-item-icon'>< AssessmentOutlined/> Home</div>
                <div className='sidebar-item-icon'>< DashboardOutlined/> Service</div>
                <div className='sidebar-item-icon'> Register</div>
            </div>
            </div>
         )}
    </div>
  )
}

export default PhoneSidebar