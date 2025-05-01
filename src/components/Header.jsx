import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='max-w-sm mx-auto'>
            
            <div className='flex flex-col justify-center items-center gap-2'>
                <img className='w-[350px]' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
            </div>

        </div>
    );
};

export default Header;