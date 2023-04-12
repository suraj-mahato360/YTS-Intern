import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        className={`container group h-[100vh] border-r-4 border-purple-500 text-2xl bg-gray-950 fixed ${
          open ? "w-72" : "w-0"
        }`}
      >
        <div className="logo text-3xl px-4 py-4">
          <i class="ri-menu-fill" onClick={() => setOpen(!open)}></i>
        </div>
        <div className="list">
          <ul className={`${open ? "w-72" : "hidden"}`}>
            <NavLink to={"/"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-950">
                <div className="logo px-4">
                  <i class="ri-sun-fill"></i>
                </div>
                <div className="list">Today's task</div>
              </li>
            </NavLink>
            <NavLink to={"/important"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-950">
                <div className="logo px-4">
                  <i class="ri-file-warning-fill"></i>
                </div>
                <div className="list">Important</div>
              </li>
            </NavLink>
            <NavLink to={"/planned"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-950">
                <div className="logo px-4">
                  <i class="ri-building-3-fill"></i>
                </div>
                <div className="list">Planned</div>
              </li>
            </NavLink>
            <NavLink to={"/alltask"} >
              <li className="side-list flex py-2 cursor-pointer hover:bg-purple-950">
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
