import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = () =>{
        logoutUser();
        navigate('/');
    }
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost text-xl">Task Eater</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li><Link to='/register'>Register</Link></li>
                    
                    </ul>
                    {user ? <button onClick={logOut} className='btn'>Logout</button>
                        : <button onClick={()=>{navigate('/login')}} className='btn'>Login</button>
                }
                </div>
                </div>
        </div>
    );
};

export default Navbar;