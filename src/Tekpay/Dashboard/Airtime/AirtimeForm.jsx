import React, {useState} from 'react'
import '../../../Styles/Topup.css'
import PinModal from '../PinModal';
const AirtimeForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [msgNumber, setMsgNumber] = useState('')
    const [loading, setLoading] = useState(false)
   const HandleInputChange = (e) =>{
     const value = e.target.value;
     setPhoneNumber(value)

   const prefixRegmtn = /^(?:\+?234|10)?(0703|0706|0803|0806|0810|0813|0814|0816|0903|0906)/;
   const prefixReglo = /^(?:\+?234|10)?(0703|0706|0803|0806|0810|0813|0814|0816|0903|0914)/;
   const matches = value.match(prefixRegmtn && prefixReglo)
   if(matches && value.length === 11){
      setLoading(true)
    setTimeout(() => {
        setMsgNumber(matches[1])
        setLoading(false)
    }, 2000);
      console.log(matches[1])
   }
   else{
    setMsgNumber('')
   }
   }
  return (
    <div className='py-4'>
         <form>
             <div className='form-group'>
                <label className='text-white airtime-label'>Enter number</label>
                 <input type="text" value={phoneNumber} onChange={HandleInputChange}  className="form-control airtime-input" />
             </div>
               {loading ? "loading" : <>{!msgNumber ? null : <>{msgNumber  ? "mtn" : "wrong number"}</>}
             </>}
             <div className='form-group'>
                <lable className='text-white airtime-label'>Enter amount</lable>
                 <input type="text"  className="form-control airtime-input" />
             </div>

             <div className='form-group'>
                <PinModal/>
             </div>
         </form>
         
    </div>
  )
}

export default AirtimeForm