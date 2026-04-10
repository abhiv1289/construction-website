import React from "react";
import {
  FaHardHat,
  FaDraftingCompass,
  FaBuilding,
  FaTools,
  FaComments,
  FaCouch,
} from "react-icons/fa";

const services = [
  {
    title: "Building",
    icon: <FaHardHat size={30} />,
  },
  {
    title: "Planning",
    icon: <FaDraftingCompass size={30} />,
  },
  {
    title: "Architecture",
    icon: <FaBuilding size={30} />,
  },
  {
    title: "Restoration",
    icon: <FaTools size={30} />,
  },
  {
    title: "Consultation",
    icon: <FaComments size={30} />,
  },
  {
    title: "Interior Design",
    icon: <FaCouch size={30} />,
  },
];

const HeroSectionSecond = () => {
  return (
    <div className=" m-5 bg-gray-100">
      
      {/* TOP BACKGROUND SECTION */}
      <div className="relative h-[250px] md:h-[300px] lg:h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="construction"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            Best Services
          </h2>
          <p className="text-gray-200 mt-2 max-w-xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-cyan-500 mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Woodland Construction Group Project Gallery
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          The Oasis Proximity Fund focuses on care and nursing facilities.
          The group has strong representation by long-standing tenants,
          significant demand, and extended leases.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionSecond;