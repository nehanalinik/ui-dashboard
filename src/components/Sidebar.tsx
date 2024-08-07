import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiBarChartSquare, BiWalletAlt } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = location.pathname === "/dashboard";
  return (
    <aside className="bg-greyshades-600 w-full h-full">
      <div className="hidden md:flex md:items-center md:justify-center md:p-4">
        <BsFillGridFill className="text-primary-400" size={32} />
      </div>
      <div className="bg-greyshades-600 md:h-[90vh] flex flex-col p-4 justify-between">
        <ul className="flex items-center justify-between md:flex-col md:justify-normal md:gap-12">
          <li>
            <Link
              to="dashboard"
              className={`text-greyshades-300 ${
                isActive
                  ? " flex text-primary-400 border-b-4 md:border-l-4 md:border-b-0 border-primary-400"
                  : ""
              }`}
            >
              <AiFillHome size={22} />
            </Link>
          </li>
          <li>
            <BiBarChartSquare size={22} className="text-greyshades-300" />
          </li>
          <li>
            <HiOutlineClipboardList size={22} className="text-greyshades-300" />
          </li>
          <li>
            <BiWalletAlt size={22} className="text-greyshades-300" />
          </li>
          <li>
            <MdOutlineShoppingBag size={28} className="text-greyshades-300" />
          </li>
        </ul>
        <div className="hidden md:flex">
          <RiLogoutCircleRLine size={22} className="text-greyshades-300" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
