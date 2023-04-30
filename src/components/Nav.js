import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav({ setToken, setLoggedIn, LoggedIn }) {
   
const navigate = useNavigate();

    function logout() {
        setToken('');
        setLoggedIn(false);
        window.localStorage.removeItem("token");
        navigate('/login')
    }

    return (

        
 <nav>
                <h1 className='title'>Stranger's Things</h1>
            {LoggedIn ? (
                <>
                    <ul>

                        <li><Link to='/home'>Home</Link></li>
                        <li> <Link to='/posts'>Posts </Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><button onClick={logout}>Log Out</button></li>

                    </ul>
        </>
          ) : (
                <>

                        <ul>

                            <li><Link to='/home'>Home</Link></li>
                            <li> <Link to='/posts'>Posts </Link></li>
                            <li><Link to='/login'>Login</Link></li>

                        </ul>
                     
                   
                </>
            )}
            </nav>
            )
            }



export default Nav;