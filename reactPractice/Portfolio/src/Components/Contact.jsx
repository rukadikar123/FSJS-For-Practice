import React from "react";

function Contact() {
  return (
    <div name="Contact">
      <div className="md:mt-20 mt-10 md:ml-20 ml-4">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">Contact me</h1>
        <p className="text-lg font-medium">
          Please fill out the form below to contact me
        </p>
      </div>
      <div className="mt-10 md:mx-0 mx-4 flex items-center justify-center">
        <form
          method="POST"
          action="https://getform.io/f/ajjjygka"
          className="flex bg-slate-300 w-full md:w-1/4 px-4 py-6 rounded-lg flex-col gap-6 "
        >
          <h1 className="text-2xl font-medium">Send Your Message</h1>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-normal">Full Name</label>
            <input
              name="name"
              className="p-1 text-sm outline-none rounded-md"
              type="text"
              required
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-normal">Email Address</label>
            <input
              name="email"
              className="p-1 text-sm outline-none rounded-md"
              type="email"
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-normal">Message</label>
            <textarea
              name="message"
              rows={3}
              className="p-1 text-sm outline-none rounded-md"
              type="text"
              required
              placeholder="Text Your Message here"
            />
          </div>
          <div>
            {" "}
            <button
              className="bg-black text-emerald-50 rounded-lg hover:bg-slate-700 duration-150 px-3 py-2"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
