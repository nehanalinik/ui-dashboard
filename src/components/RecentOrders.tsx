import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      imgSrc: img1, // Replace with actual image URLs
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
      imgSrc: img2,
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
      imgSrc: img3,
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
      imgSrc: img4,
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
      imgSrc: img5,
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
      imgSrc: img6,
    },
  ];
  const statusStyles: any = {
    Delivered: "bg-greenColor-700 text-greenColor-400",
    Cancelled: "bg-redColor-700 text-redColor-400",
    Pending: "bg-redColor-700 text-redColor-400",
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Order No.</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2 flex items-center">
                <img
                  src={order.imgSrc}
                  alt={order.customer}
                  className="w-10 h-10 rounded-full mr-4"
                />
                {order.customer}
              </td>
              <td className="py-2">{order.orderNo}</td>
              <td className="py-2">{order.amount}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full ${
                    statusStyles[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
