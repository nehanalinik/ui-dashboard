import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import ProfileImg from "../assets/profile-img.svg";

const Topbar = () => {
  return (
    <section className="p-4 w-full bg-greyshades-600 flex items-center justify-between">
      <div className="md:hidden flex w-full">
        <HiOutlineMenu className="text-greyshades-100" size={24} />
        <RxDividerVertical className="text-greyshades-400" size={24} />
        <BsFillGridFill className="text-primary-400" size={24} />
      </div>
      <div className="flex gap-3 md:gap-6 justify-end md:justify-between w-full">
        <div className="flex items-center justify-center bg-greyshades-400 rounded-full md:rounded-md w-[34px] h-[34px] md:px-2 md:py-0 md:w-2/6 md:border md:border-greyshades-300">
          <IoSearchOutline className="text-greyshades-300" size={20} />
          <input
            type="text"
            className="hidden md:flex border-none w-full py-1 px-1 bg-transparent text-greyshades-300 font-normal"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-3 md:gap-2">
          <div className="hidden md:flex bg-greyshades-400 w-[34px] h-full items-center justify-center rounded-full">
            <CiMail className="text-greyshades-300" size={20} />
          </div>
          <div className="hidden md:flex bg-greyshades-400 w-[34px] h-full items-center justify-center rounded-full">
            <LuSettings className="text-greyshades-300" size={20} />
          </div>
          <div className="flex bg-greyshades-400 w-[34px] h-full items-center justify-center rounded-full">
            <IoIosNotifications className="text-greyshades-300" size={20} />
          </div>
          <div className="w-[32px]">
            <img src={ProfileImg} alt="profile" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
