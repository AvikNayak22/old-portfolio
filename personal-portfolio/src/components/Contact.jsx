import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/86d90927-56d6-41c5-839a-3956fe643a20"
        className="flex flex-col max-w-[600px] w-full"
        method="POST"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#3a75c2] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            nayakavik19@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6fc]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6fc]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6fc] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#3a75c2] hover:border-[#3a75c2] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
