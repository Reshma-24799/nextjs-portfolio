"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
    const navLinks = [
        {
          title: "About",
          path: "#about",
        },
        {
          title: "Projects",
          path: "#projects",
        },
        {
          title: "Contact",
          path: "#contact",
        },
      ];
  return (
    <nav className="fixed  mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap container items-center justify-between mx-auto px-4 py-2 lg:py-4">
            <div></div>
            <div className="mobile-menu block md:hidden ">
              {
                navbarOpen ? (
                  <button 
                    onClick={() => setNavbarOpen(false)}
                    className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 hover:text-white hover:border-white rounded"
                  >
                      <XMarkIcon className="h-5 w-5" />
                  </button>
                ) : (
                  <button 
                    onClick={() => setNavbarOpen(true)}
                    className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 hover:text-white hover:border-white rounded"
                  >
                      <Bars3Icon className="h-5 w-5" />
                  </button>
                )
              }
            </div>
            <div className="menu hidden md:block md:w-auto " id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
            ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
