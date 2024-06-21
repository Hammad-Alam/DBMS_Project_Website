import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({
    children,
    Active,
  }: {
    children?: React.ReactNode;
    Active?: number;
  }) {
    const AllLinks = [
      {
        category: "Dashboard",
        id: 1,
        path: "/admin-dashboard",
      },
      {
        category: "Products",
        id: 2,
        path: "/manage-products",
      },
      {
        category: "Sub-Admin",
        id: 3,
        path: "/SubAdmin",
      },
      {
        category: "Support",
        id: 4,
        path: "/support",
      },
    ];
 
  
    return (
      <>
        <aside className="fixed min-h-screen w-64 flex-col overflow-y-auto  py-8 z-10  bg-white text-black border-r-2 border-black">
          <div className="flex items-center justify-start px-9">
            <h1 className='text-4xl'>LOGO</h1>
          </div>
          <div className="mt-6 flex flex-1 flex-col justify-between px-5">
            <nav className="space-y-6">
              {AllLinks.map((item) => (
                <div className="space-y-3" key={item.id}>
                  <Link
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    to={item.path}
                  >
                    <span
                      className={`mx-2 text-sm font-medium ${
                        Active === item.id ? "text-green-600" : null
                      }`}
                    >
                      {item.category}
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>
  
        {/* Add the main content here */}
        <div className=" overflow-x-hidden overflow-y-auto ">
          <div className="flex-1 overflow-x-hidden overflow-y-auto ml-64 bg-backGroundColor  pl-1">
            {children}
          </div>
        </div>
      </>
    );
  }
