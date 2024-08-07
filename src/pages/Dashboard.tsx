import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillBagXFill } from "react-icons/bs";
import { IoBagCheck } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import ProfileCard from "../components/ProfileCard";
import ActivityChart from "../components/ActivityChart";
import MenuList from "../components/MenuList";
import RecentOrders from "../components/RecentOrders";
import CustomerFeedback from "../components/CustomerFeedback";
import MetricCard from "../components/MetricCard";

const Dashboard = () => {
  return (
    <div className="bg-greyshades-900 w-full min-h-screen text-slate-200 p-4">
      <h1 className="text-white text-2xl font-medium">Dashboard</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              icon={FaShoppingBasket}
              iconBgColor="bg-primary-700"
              iconColor="text-primary-400"
              label="Total Orders"
              value="75"
              percentage="3%"
              percentageType="increase"
              percentageColor="text-greenColor-400"
            />
            <MetricCard
              icon={IoBagCheck}
              iconBgColor="bg-greenColor-700"
              iconColor="text-greenColor-400"
              label="Total Delivered"
              value="70"
              percentage="3%"
              percentageType="decrease"
              percentageColor="text-redColor-400"
            />
            <MetricCard
              icon={BsFillBagXFill}
              iconBgColor="bg-redColor-700"
              iconColor="text-redColor-400"
              label="Total Cancelled"
              value="05"
              percentage="3%"
              percentageType="increase"
              percentageColor="text-greenColor-400"
            />
            <MetricCard
              icon={FaCircleDollarToSlot}
              iconBgColor="bg-pinkColor-700"
              iconColor="text-pinkColor-400"
              label="Total Revenue"
              value="$12k"
              percentage="3%"
              percentageType="decrease"
              percentageColor="text-redColor-400"
            />
          </div>
          <div className="md:col-span-2">
            <ProfileCard />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 my-6">
          <div className="md:col-span-4">
            <ActivityChart />
          </div>
          <div className="md:col-span-2">
            <MenuList />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-4">
            <RecentOrders />
          </div>
          <div className="md:col-span-2">
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
