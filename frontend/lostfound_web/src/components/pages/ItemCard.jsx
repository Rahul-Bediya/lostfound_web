// frontend/src/components/ItemCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Helper function to format date and time
const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item._id}`);
  };

  return (
    // <div onClick={handleClick} className="cursor-pointer bg-white p-4 rounded shadow-md hover:shadow-lg transition">
    //   <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    //   <p className="text-gray-700 mb-2">{item.description}</p>
    //   <p className="text-gray-500 mb-2">Category: {item.category}</p>
    //   <p className="text-gray-500 mb-2">Location: {item.location}</p>
    //   {item.imageUrl && (
    //     <img src={item.imageUrl} alt={item.title} className="mt-2 w-full h-auto rounded-lg" />
    //   )}
    //   {/* Display the formatted date and time */}
    //   <p className="text-gray-400 text-sm mt-2">Posted on: {formatDate(item.date)}</p>
    // </div>

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  {/* Link wrapping the image */}
  <a href="#" onClick={handleClick}>
    {item.imageUrl && (
      <img className="rounded-t-lg w-full h-auto" src={item.imageUrl} alt={item.title} />
    )}
  </a>
  {/* Card content */}
  <div className="p-5">
    {/* Title as a clickable link */}
    <a href="#" onClick={handleClick}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
    </a>
    {/* Description */}
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
    {/* Category and Location */}
    <p className="text-gray-500 dark:text-gray-400 mb-2">Category: {item.category}</p>
    <p className="text-gray-500 dark:text-gray-400 mb-2">Location: {item.location}</p>
    {/* Formatted date */}
    <p className="text-gray-400 text-sm mt-2">Posted on: {formatDate(item.date)}</p>
    {/* "Read more" button */}
    <a href="#" onClick={handleClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

  );
};

export default ItemCard;
