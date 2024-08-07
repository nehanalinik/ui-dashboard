import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="relative flex flex-col md:flex-row h-[100vh] w-[100%]">
      <div className="order-2 sticky bottom-0 w-full md:order-1 md:relative md:w-[5%] h-full">
        <Sidebar />
      </div>
      <div className="order-1 md:order-2 flex flex-col md:w-[95%]">
        <div className="">
          <Topbar />
        </div>
        <div className="overflow-y-scroll w-full h-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
