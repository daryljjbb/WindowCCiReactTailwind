import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {Menu, X} from "lucide-react";

const Navlinks = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
        </>
    );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <nav className="flex w-1/3 justify-end text-white">
        <div className="hidden w-full justify-between md:flex">
            <Navlinks />
        </div>
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>{isOpen ?<X/> : <Menu/>}</button>
        </div>
       


    </nav>
    {isOpen && (
        <div className="flex flex-col pl-2 pt-2 py-1 content-around  basis-full bg-violet-300 rounded-lg text-white italic text-xl">
            <Navlinks/>
        </div>
    )}
            <div > {/* this makes sure that the components are display properly in the browser*/}
            <Outlet />{/* This allows the components to render makes sure you put the <Outlet/> after the nav with a div */}
            </div>
    </>
    
    
  );
};

export default Nav;
