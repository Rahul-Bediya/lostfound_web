import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Subscribe to our newsletter</h2>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Input your email"
            className="px-4 py-2 rounded-l-md outline-none"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600">
            Subscribe
          </button>
        </div>
        <div className="mt-8 space-x-4">
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Help Center</a>
          <a href="#" className="hover:text-white">FAQs</a>
        </div>
        <p className="mt-8 text-sm">&copy; 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
