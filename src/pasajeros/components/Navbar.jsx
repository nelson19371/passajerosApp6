import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth';
import logo from '../components/icono.png'

export const Navbar = () => {
   
    const {photoURL} = useSelector(state => state.auth);

   const dispatch = useDispatch();

    const onLogout = () =>{
       
        dispatch(startLogout());
       
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
             <NavLink 
        className="nav-item nav-link text-info" 
        to="/login"
        >
        <img src={logo}/>
        </NavLink>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
       

        </li>
        <li class="nav-item">
        <div className="navbar-nav">

        <NavLink 
        className="nav-item nav-link " 
        to="/pasajeros"
        >
        Planta
        </NavLink>


</div>
        </li>
        <li class="nav-item">
        <NavLink 
        className="nav-item nav-link " 
        to="/minaPage"
        >
        Mina
        </NavLink>
        </li>
        
       {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto ml-4">
                    
                        <span className='nav-item nav-link text-warning'>
                            {(photoURL ===null) ? nombre: photoURL}
         
                        
                        </span>

                        <button className='nav-item nav-link btn'
                        onClick={onLogout}
                        >
                        Cerrar Sesión
                        </button>
                        
                    
                </ul>
            </div>  */}
     
        
      </ul>
         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                        

                        <button className='nav-item nav-link btn'
                        onClick={onLogout}
                        >
                        Cerrar Sesión
                        </button>
                        
                    
                </ul>
            </div> 
    </div>
            {/* <Link 
                className="navbar-brand" 
                to="/"
            >
                
            </Link>
            <ul class="navbar-nav"></ul>
            <div className="navbar-collapse">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
   
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link text-info" 
                        to="/login"
                    >
                      <img src={logo}/>
                    </NavLink>

                   
                </div>
            </div>

            <div className="navbar-collapse" id="navbarSupportedContent">
            
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
    

           
        </nav>
    )
}
