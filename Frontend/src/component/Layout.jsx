import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
  const [sidebarOpen,setSidebarOpen]=useState(true)
  return (
    <div className="flex min-h-screen" >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}/>
        <main className="min-h-screen  p-6 bg-gray-100 flex-1">
         <Outlet/>
        </main>
      </div>
    </div>
  );
}
