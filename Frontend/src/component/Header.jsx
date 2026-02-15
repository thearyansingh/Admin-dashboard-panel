import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ setSidebarOpen,sidebarOpen }) => {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6  py-1">
     
        <GiHamburgerMenu className="text-black text-2xl " onClick={() => setSidebarOpen(!sidebarOpen)}/>
      <div className="flex items-center gap-6">
        <p className="text-gray-600 text-sm">My School Admin</p>

        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
