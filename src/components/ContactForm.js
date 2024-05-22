// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    copy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>
            <p className="mb-6 text-neutral-500">
              We'd love to hear from you! Please fill out the form below to get
              in touch with us.
            </p>
            <p className="mb-2 text-neutral-500">
              New York, 94126, United States
            </p>
            <p className="mb-2 text-neutral-500">+ 01 234 567 89</p>
            <p className="mb-2 text-neutral-500">info@gmail.com</p>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full rounded-lg border-gray-300 p-4 placeholder-transparent focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 -translate-y-4 scale-75 transform bg-white px-2 text-neutral-500 transition-all duration-200 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-500"
                >
                  Name
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  className="peer block w-full rounded-lg border-gray-300 p-4 placeholder-transparent focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  id="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 -translate-y-4 scale-75 transform bg-white px-2 text-neutral-500 transition-all duration-200 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-500"
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6">
                <textarea
                  name="message"
                  className="peer block w-full rounded-lg border-gray-300 p-4 placeholder-transparent focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 -translate-y-4 scale-75 transform bg-white px-2 text-neutral-500 transition-all duration-200 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-500"
                >
                  Message
                </label>
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="copy"
                  className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                  id="copy"
                  checked={formData.copy}
                  onChange={handleChange}
                />
                <label htmlFor="copy" className="ml-2 text-neutral-500">
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-green-500 px-6 py-3 text-white font-medium uppercase transition duration-150 ease-in-out hover:bg-green-600 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
