import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../App';
// import { useAuth } from '../context/todoContext';

const Header = () => {
  const auth = useAuth();
  

  const handlerLogout = ()=> {
    auth.handlerLogout();
  };

 

  return (
    <header>
            
            {auth.user.login &&
              <nav className='primary-nav'>
                {/* <NavLink to="/todos">Todos</NavLink> */}
                <span>Welcome {auth.user.username}!</span>
                <button onClick={handlerLogout}>Logout</button>
              </nav>
            }
            
        
    </header>
  )
}

export default Header