import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div>
                {user && user.email}
            </div>

            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login-btn flex gap-4'>
                <img src={userIcon} alt="" />
                <Link to="/auth/login"><button className='btn btn-primary px-5'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;