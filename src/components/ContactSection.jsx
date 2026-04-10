import React from "react";

const ContactSection = () => {
  return (
    <div className="m-5 bg-gray-100 py-12 px-4">
      
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        Contact Us
      </h2>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 shadow-lg overflow-hidden rounded-lg">
        
        {/* LEFT IMAGE */}
        <div className="h-[300px] md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="workshop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#1f4d46] text-white p-8 md:p-10">
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Contact Us Now For A <br /> Free Consultation
          </h3>

          <p className="text-gray-300 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* FORM */}
          <form className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm placeholder-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm placeholder-gray-300"
              />
            </div>

            <input
              type="text"
              placeholder="Are You a New Client?"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 text-sm placeholder-gray-300"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-4 flex items-center gap-2 bg-transparent border border-gray-300 px-4 py-2 text-sm hover:bg-white hover:text-[#1f4d46] transition"
            >
              Submit
              <span className="bg-cyan-400 text-black px-2 py-1 text-xs">
                ↗
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;