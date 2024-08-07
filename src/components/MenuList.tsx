import React from "react";
import { FaHamburger, FaUtensils, FaChevronRight } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

const MenuList = () => {
  const menuItems = [
    {
      icon: <BiTargetLock />,
      label: "Goals",
      bgColor: "bg-redColor-700",
      color: "text-redColor-400",
    },
    {
      icon: <FaHamburger />,
      label: "Popular Dishes",
      bgColor: "bg-primary-700",
      color: "text-primary-400",
    },
    {
      icon: <FaUtensils />,
      label: "Menus",
      bgColor: "bg-tealColor-700",
      color: "text-tealColor-400",
    },
  ];
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4 p-2">
          <div
            className={`flex items-center ${item.bgColor} ${item.color} p-4 rounded-full text-2xl`}
          >
            {item.icon}
          </div>
          <div className="flex-1 ml-4 text-lg">{item.label}</div>
          <FaChevronRight className="text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
