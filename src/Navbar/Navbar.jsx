import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Task Eater</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    
                    </ul>
                    <button className='btn'>Login</button>
                </div>
                </div>
        </div>
    );
};

export default Navbar;