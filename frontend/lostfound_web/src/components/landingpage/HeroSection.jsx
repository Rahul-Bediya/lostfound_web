import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero_image.jpg')" }} // Image from public folder
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Reconnect with Your Lost Items
        </h1>
        <p className="text-black-200 mb-6">
          Effortlessly locate and reunite with your lost belongings using our streamlined platform.
        </p>
      

        <button
            onClick={() => navigate("/register")}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Let's Found
          </button>
      </div>
    </section>
  );
};

export default HeroSection;
