import { checkboxClasses } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/heroes/icono.png'
import {useForm} from '../../hooks/'
import {  startGoogleSignIn, startLoginWithEmailPassword ,} from "../../store/auth/thunks"

export const LoginPage = () => {

    const {status, errorMessage} =useSelector(state => state.auth);

    const dispatch = useDispatch();

    const {email,password, onInputChange, formState} = useForm({
      email: 'fernando@google.com',
      password: '123456'
    })
    

    const isAuthenticating = useMemo(()=>status ==='cheking', [status]);

    const onSubmit = (event) =>{
      event.preventDefault();
      // console.log({email,password});
      dispatch(startLoginWithEmailPassword({email, password}));
    }

    const onGoogleSignIn = () =>{
      console.log('onGoogleSignIn');
      dispatch(startGoogleSignIn());
    }

  
  const navigate = useNavigate();
  const onLogin = () =>{
    navigate('/inicio',{
      replace:true
    })
    
  }


  return (
   
      <>
       
      <div className="container w-75 mt-5 bg-light rounded shadow" >
        <div className="row align-items-stretch">
            <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
            
            </div>
            <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
                <img src={logo}/>
              </div>
              <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>

              <form action="#">
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" name="email" onChange={onInputChange} value={email}/>
                </div>
                <div className="mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control"  name="password" onChange={onInputChange} value={password}/>
                </div>
                <div className="mb-4 form-check">
                      <input type="checkbox" name="conected" className="form-check-input"/>
                      <label htmlFor="conected" className="form-check-label">Mantenerme conectado</label>
                </div> 
                <div className="d-grid">
                    <button disabled={isAuthenticating} type="submit" className="btn btn-warning" onClick={onSubmit} id="bot">Iniciar Sesión</button>
                    <br/>
                    
                </div>
                <div className="mb-4 mt-3">
                TRACTECK DERECHOS RESERVADOS
                </div>

              </form>

            </div>

        </div>
      </div>
      </>
      

    
    
  )
}
