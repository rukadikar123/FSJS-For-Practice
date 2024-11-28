import React from "react";
import { useNavigate } from "react-router-dom";

function ContactSection() {
    const navigate=useNavigate()

    const handleSubmit=()=>{
        alert("Your query has been submitted!")
        navigate("/")
    }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg leading-relaxed mb-8">
        Have a question or concern? We're here to help.
      </p>
      <div className="flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <i className="fa fa-envelope text-lg mr-2" />
          <a href="mailto:info@yourbrand.com" className="text-lg">
            info@eshop.com
          </a>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <i className="fa fa-phone text-lg mr-2" />
          +91 80 1234 56xx
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <i className="fa fa-map-marker text-lg mr-2" />
          123, MG Road, Bengaluru, Karnataka 560001
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/2 p-2 mb-4 md:mb-0"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 p-2"
          />
        </div>
        <textarea placeholder="Message" className="w-full p-2 mb-4" />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
      <div className="flex justify-center mb-8">
        <a
          href="https://facebook.com/yourbrand"
          target="_blank"
          className="mr-4 text-lg"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          href="https://instagram.com/yourbrand"
          target="_blank"
          className="mr-4 text-lg"
        >
          <i className="fa fa-instagram" />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
