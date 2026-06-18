import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../customHook/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Header = ({ setSidebarOpen, sidebarOpen }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const { data } = await axios.post(
        `${API_URL}/api/user/logout`,
        {},
        { withCredentials: true },
      );
      if (data.success === true) {
        localStorage.removeItem("userData");
        setUser({});
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    }
  };

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6  py-1">
      <GiHamburgerMenu
        className="text-black text-2xl "
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex items-center gap-6">
        <button
          onClick={logout}
          className="px-3 py-2 text-white bg-blue-400 rounded-lg text-sm"
        >
          Logout
        </button>
        <p className="text-gray-600 text-sm">Hii. {user?.fullName}</p>

        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
