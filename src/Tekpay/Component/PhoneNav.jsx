import React, {useState} from 'react'
import './../../Styles/Phonenav.css'
import {Menu, Cancel} from '@mui/icons-material'
import PhoneSidebar from './PhoneSidebar'
const PhoneNav = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='phone-section'>
      <div className='phonenav'>
     <div>Tekpay</div>
     <div>{toggle ? <Menu onClick={e =>setToggle(!toggle)}/> : <Cancel onClick={e =>setToggle(!toggle)}/>}</div>
    </div>
    <PhoneSidebar toggle={!toggle}/>
    </div>
  )
}

export default PhoneNav