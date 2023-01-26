import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth';
import logo from '../../assets/heroes/icono.png'

export const Navbar = () => {
    let nombre = 'Julio Vega';
    const {photoURL} = useSelector(state => state.auth);

   const dispatch = useDispatch();

    const onLogout = () =>{
       
        dispatch(startLogout());
       
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link text-info" 
                        to="/login"
                    >
                      <img src={logo}/>
                    </NavLink>

                   
                </div>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link " 
                        to="/pasajeros"
                    >
                      Planta
                    </NavLink>

                   
                </div>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link " 
                        to="/minaPage"
                    >
                      Mina
                    </NavLink>

                   
                </div>
            </div>
            {/* <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link text-info" 
                        to="/pasajeros"
                    >
                      ADM
                    </NavLink>

                   
                </div>
            </div> */}

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                        <span className='nav-item nav-link text-warning'>
                            {(photoURL ===null) ? nombre: photoURL}
         
                        
                        </span>

                        <button className='nav-item nav-link btn'
                        onClick={onLogout}
                        >
                        Cerrar Sesión
                        </button>
                        
                    
                </ul>
            </div>
        </nav>
    )
}