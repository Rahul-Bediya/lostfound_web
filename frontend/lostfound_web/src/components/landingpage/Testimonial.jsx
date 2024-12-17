import React from "react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://source.unsplash.com/random/150x150/?person"
            alt="profile"
            className="w-32 h-32 rounded-full mb-6 md:mb-0"
          />
          <div className="text-center md:text-left md:ml-8">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
            <p className="text-gray-700 italic mt-4">
              "This app has reunited me with my lost wallet twice! The community
              is amazing and so helpful."
            </p>
            <p className="text-gray-800 font-bold mt-4">sumit raj</p>
            <p className="text-gray-500">Graphic Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
