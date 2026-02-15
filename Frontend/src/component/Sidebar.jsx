import React, { useState } from "react";
import { GiOpenBook } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const menuData = [
  {
    title: "Products",
    submenu: [{name:"Product List",url:"/ListProduct"},{name:"Add Product",url:"/addProduct"},{name:"Product List",url:"/ListProduct"}],
  },
  {
    title: "Orders",
   submenu: [{name:"Product List",url:"/ListProduct"},{name:"Add Product",url:"/addProduct"},{name:"Product List",url:"/ListProduct"}],
  },
  {
    title: "Categories",
     submenu: [{name:"Product List",url:"/ListProduct"},{name:"Add Product",url:"/addProduct"},{name:"Product List",url:"/ListProduct"}],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeOption, setActiveOption] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  console.log(openMenu)

  const handleToggle = (title) => {
    if (openMenu === title) setOpenMenu(null);
    else setOpenMenu(title);
  };
  const navigate=useNavigate()

  return (
    <>
      {/* {sidebarOpen && (
        <div
          className="fixed inset-0  z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )} */}
      <aside
        className={` top-0 left-0  w-64 bg-[#111827] text-white p-4 z-50
        transform transition-transform duration-300 

        ${sidebarOpen ? "translate-x-0 " : "-translate-x-full  lg:hidden"}

        lg:static`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Admin Panel</h1>

          {/* <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button> */}
        </div>

        <nav className="space-y-6">
          {menuData.map((menu) => (
            <div key={menu.title}>
              <button
                onClick={() => handleToggle(menu.title)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-700"
              >
                <span>{menu.title}</span>
                <span>{openMenu === menu.title ? "▲" : "▼"}</span>
              </button>

              {openMenu === menu.title && (
                <ul className="pl-3 space-y-3">
                  {menu.submenu.map((sub) => (
                    <li
                      key={sub.name}
                      onClick={()=>navigate(sub.url)}
                      className="text-gray-300   hover:text-white  p-2 rounded-xl hover:bg-slate-400 cursor-pointer"
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
