import { Navbar } from "../../ui"
import {Navigate, Route, Routes} from 'react-router-dom';

import {PasajerosPage} from '../page/pasajerosPage';
import {MinaPage} from '../page/minaPage'
import { LoginPage } from "../../auth/pages/LoginPage";
import { Inicio } from "../page/inicio";

export const PasajerosRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path="minaPage" element ={<MinaPage/>}/>
        <Route path="pasajeros" element ={<PasajerosPage/>}/>
        
        <Route path="login" element= {<Inicio/>}/>
        

        <Route path ="/" element={<Navigate to ="/login"/>}/>
    </Routes>
    </>
  )
}
