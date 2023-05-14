import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Weather from "./Weather";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`container group h-full border-r-4 border-purple-500 text-2xl bg-gray-950 fixed pt-20 ${
          open ? "w-64" : "w-0"
        }`}
      >
        <div className="logo text-3xl px-4 py-4">
          <i className={`ri-menu-fill`} onClick={() => setOpen(!open)}></i>
        </div>
        <div className="list">
          <ul className={`${open ? "w-64" : "hidden"} text-center`}>
            <NavLink to={"/"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-900">
                <div className="logo px-4">
                  <i class="ri-sun-fill"></i>
                </div>
                <div className="list">Today's task</div>
              </li>
            </NavLink>
            <NavLink to={"/important"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-900">
                <div className="logo px-4">
                  <i class="ri-file-warning-fill"></i>
                </div>
                <div className="list">Important</div>
              </li>
            </NavLink>
            <NavLink to={"/planned"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-900">
                <div className="logo px-4">
                  <i class="ri-building-3-fill"></i>
                </div>
                <div className="list">Planned</div>
              </li>
            </NavLink>
            <NavLink to={"/alltask"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-900">
                <div className="logo px-4">
                  <i class="ri-file-list-fill"></i>
                </div>
                <div className="list">All Tasks</div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
