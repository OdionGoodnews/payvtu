import React, {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Loading from './Tekpay/Component/Loading'
const App = () => {
 const Landing = lazy(() =>import('./Tekpay/Component/Landing'))
 const Login = lazy(() =>import('./Tekpay/Layout/Login/Login'))
 const Account = lazy(() =>import('./Tekpay/Layout/Account/Account'))
 const Home = lazy(() =>import('./Tekpay/Dashboard/Home'))
 const Errorpage = lazy(() =>import('./Tekpay/Component/Errorpage'))
 const Topup = lazy(() =>import('./Tekpay/Dashboard/Airtime/Topup'))
  return (
    <div>
       <Suspense fallback={<Loading/>}>
         <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Account/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/topup" element={<Topup/>}/>
          <Route path="/*" element={<Errorpage/>}/>
         </Routes>
       </Suspense>
    </div>
  )
}

export default App