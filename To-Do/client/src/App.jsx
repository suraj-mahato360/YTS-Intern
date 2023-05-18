import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import TodayTask from "./pages/TodayTask";
import Important from "./pages/Important";
import Planned from "./pages/Planned";
import AllTask from "./pages/AllTask";
import Weather from "./components/Weather";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

function App() {

  const { user } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="App text-white">
        <Navbar />
        {user? (
          <>
        <SideBar />
        <Weather />
        </>
        ):null}
        
        <Routes>
          <Route path="/" element={<TodayTask />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/important" element={<Important />} />
          <Route path="/planned" element={<Planned />} />
          <Route path="/alltask" element={<AllTask />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
