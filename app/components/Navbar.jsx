import React, { useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
// import ThemeSelector from './ui/ThemeToggle';
import { FaSearch } from "react-icons/fa";
import ThemeSelector from './ui/drawer/Drawer';
//============================================================
const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-background text-white  border-accent">




      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        {!props.isSidebarOpen ? <button
          className="p-2 rounded-full bg-accent text-primary-text-inverse hover:bg-accent/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 w-10 h-10 mb-4"
          onClick={() => {
            props.setIsSidebarOpen(!props.isSidebarOpen);
          }}
          aria-label="Toggle Sidebar"
        >
          <TbLayoutSidebarRightCollapse className="w-6 h-6" />
        </button> : null}
        {/* Logo */}
        {!props.isSidebarOpen ? <a href="/" className="flex items-center space-x-3">
          <img
            src="logo.png"
            className="w-12 h-12 rounded-full"
            alt="Logo"
          />
          <p style={{
            fontSize: 'var(--text-2xl)', color: 'var(--color-primary-text)',
          }}
            className="font-bold text-primary-text ">
            Badi Eats
          </p>        </a> : null}

        {/* Search Bar */}
        <div className="hidden   md:flex relative flex items-center w-full max-w-md sm:hidden">
          <FaSearch className="absolute left-4 top-3 text-gray-400" size={24} />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" p-3 pl-14 border  rounded-2xl bg-white text-white placeholder-gray-400 shadow-sm focus:ring-4 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-gray-400 w-full"
          />
        </div>
        {/* <ThemeSelector /> */}
        {/* Icons and Profile */}
        <div className="flex items-center space-x-6">
          {/* Bell Icon */}
          <ThemeSelector />

          <button className="relative focus:outline-none ">
            <HiOutlineBell size={24} className="p-2 rounded-full shadow-md bg-accent text-primary-text-inverse  hover:bg-accent/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 w-10 h-10 mb-4"
            />
            <span className="absolute -top-2 -right-1  bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* Profile Image */}
          <button type="button" className="focus:outline-none">
            <img
              className="w-10 h-10 rounded-full"
              src="https://ui-avatars.com/api/?name=Elon+Musk"
              alt="User"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;