import React, { useEffect } from 'react'
import { Navigate, Route, Routes} from "react-router-dom"
import { LoginPage } from '../auth/pages/LoginPage'
import { PasajerosRoutes } from '../pasajeros/routes/PasajerosRoutes'
import { Navbar } from '../pasajeros/components'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { async } from '@firebase/util'
import { login, logout } from '../store/auth'
import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {

  const {status} = useCheckAuth();

  



  if( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
   <>
   
    <Routes>
        
        {
          (status ==='autenticated')
          ?  <Route path="/*" element= {<PasajerosRoutes/>}/>:<Route path="/*" element= {<LoginPage/>}/>
        }

      
    <Route path ="/" element={<Navigate to ="/login"/>}/>
    
        
       
        

        
    </Routes>
   </>
  )
}
