import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

function InfoSection() {
  const InfoItems = [
    {
      icon: <FaShippingFast className="md:text-3xl text-2xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <BiSupport className="md:text-3xl text-2xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="md:text-3xl text-2xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="md:text-3xl text-2xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us.",
    },
    {
      icon: <MdDiscount className="md:text-3xl text-2xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <>
      <div className="md:flex md:items-center w-full  md:w-[90vw] py-3 md:justify-center grid grid-cols-2 gap-6 md:gap-10 md:mx-20 mx-4 my-16">
        {/* Mapping over InfoItems */}
        {InfoItems.map((item, idx) => (
          <div
            className="border-2 shadow-md w-full md:w-1/2 flex-1 rounded-lg p-2 gap-2  flex flex-col items-center transform  transition-transform duration-300 hover:scale-105 cursor-pointer"
            key={idx}
          >
            <div>{item.icon}</div>
            <h3 className="text-lg  font-medium">{item.title}</h3>
            <p className="text-center text-md md:line-clamp-2 ">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfoSection;
