import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

function InfoSection() {
  const InfoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <BiSupport className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us.",
    },
    {
      icon: <MdDiscount className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <>
      <div className="flex items-center py-3 justify-center gap-10 mx-20 my-16">
        {InfoItems.map((item, idx) => (
          <div
            className="border-2 shadow-md w-1/2 flex-1 rounded-lg p-2 gap-2  flex flex-col items-center transform  transition-transform duration-300 hover:scale-105 cursor-pointer"
            key={idx}
          >
            <div>{item.icon}</div>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-center text-md line-clamp-2 ">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfoSection;
