import React, {useState} from 'react'
import '../../../Styles/Topup.css'
const AirtimeCash = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [msgNumber, setMsgNumber] = useState('')
    const [amount, setAmount] = useState();
    const [loading, setLoading] = useState(false)
    const [msgper, setMsgPer] = useState()
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
    
   }
   else{
    setMsgNumber('')
   }
   }
  
   const HandleAmount = (e) =>{
     const value = e.target.value;
     setAmount(value);
     const actualamount = amount;
     const actualper = 5;
     const totalper =actualamount - (actualamount  * actualper / 100 ) ;
     console.log(totalper)
     setMsgPer(totalper)

   
   }
   
  return (
    <div className='py-4'>
         <form>
             <div className='form-group'>
                <label className='text-white airtime-label'>Enter number</label>
                 <input type="text" value={phoneNumber} onChange={HandleInputChange}  className="form-control airtime-input" />
             </div>

             <div className='form-group'>
                <lable className='text-white airtime-label'>Enter amount</lable>
                 <input type="text" value={amount} onChange={HandleAmount}  className="form-control airtime-input" />
                 <p className='msg-span'>{!msgper ? null : <>{msgper} going into your account</> }</p>
             </div>

             {loading ? "loading" 
             :
             <>
                {msgNumber ? 
               <div className='form-group'>
               <lable className='text-white airtime-label'>Banks</lable>
                 <select className="form-control airtime-input">
                  <option>union</option>
                 </select>
                 <div className='form-group'>
                <lable className='text-white airtime-label'>Account number</lable>
                 <input type="text"   className="form-control airtime-input" />
             </div>
            </div>

             : null}
             </>
             
            }

             <div className='form-group'>
                <button className='btn-topup'>Convert</button>
             </div>
         </form>
    </div>
  )
}

export default AirtimeCash