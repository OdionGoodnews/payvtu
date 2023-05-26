import React, {useState} from 'react'
import '../../../Styles/Topup.css'
import {KeyboardTab, NavigateNext} from '@mui/icons-material'
import AirtimeForm from './AirtimeForm'
import AirtimeCash from './AirtimeCash'
const TopupItem = () => {
    const [active, setActive] = useState('airtime')
  return (
    <div>
        <div className='topupitem-section col-md-6 m-auto py-5'>
            <div className='card card-topupitem'>
            <div className='card-body'>
                <div className='card-text'>
                    <div className='airtime-item'>
                         <div onClick={e =>setActive('airtime')} className={active === "airtime" ? "active-topup" : null} >Airtime topup</div>
                         <div onClick={e =>setActive('cash')} className={active === "cash" ? "active-topup" : null} >Airtime <NavigateNext/> cash</div>
                    </div>
                         {active === "airtime" ? <AirtimeForm/> : null}
                         {active === "cash" ? <AirtimeCash/> : null}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TopupItem