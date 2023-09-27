import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap font-serif">
        <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-md">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 shadow-lg"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=North+Beach,+San+Francisco,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-teal-800 relative flex flex-col flex-wrap py-6 rounded shadow-lg">

            <div className="lg:w-1/2 px-6 mt-4 lg:mt-1">
              <h2 className="title-font font-semibold text-rosado tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="text-white mr-4 leading-relaxed">
                rosjenniferm@gmail.com
              </p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col bg-gradient-to-b from-white to-white/70 rounded shadow-lg md:ml-auto w-full p-3 md:p-8 mt-8 md:mt-0 lg:w-1/3 md:w-1/2"
        >
          <p className="text-center rounded text-teal-800 leading-relaxed p-3 mb-2">
            Connect With Me
          </p>
          <div className="relative mb-2">
            <label
              htmlFor="name"
              className="rounded p-2 mb-2 leading-7 text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-teal-950 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-teal-950 font-zerif py-1 px-3 mt-1.5 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="email"
              className="rounded p-2 mb-2 leading-7 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-teal-950 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-teal-950 py-1 px-3 mt-1.5 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="message"
              className="rounded p-2 mb-2 leading-7 text-sm"
            >
              Let's hear your ideas!
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-teal-950 focus:border-gray-700 focus:ring-2 focus:ring-gray-700 h-32 text-base outline-none text-teal-950 py-1 px-3 mt-1.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-teal-800 border py-2 px-6 hover:bg-gray-700 rounded text-lg shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
