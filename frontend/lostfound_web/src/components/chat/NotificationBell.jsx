// frontend/src/components/NotificationBell.jsx
import React, { useContext, useState } from 'react';
import { NotificationContext } from './NotificationContext';
import { MdNotifications } from 'react-icons/md'; // Import notification icon from react-icons

const NotificationBell = () => {
  const { notifications } = useContext(NotificationContext); // Access notifications from context
  const [showDropdown, setShowDropdown] = useState(false);

  // Calculate the number of unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 bg-gray-800 text-white rounded-full"
      >
        <MdNotifications className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          {notifications.length === 0 ? (
            <div className="p-4">No new notifications</div>
          ) : (
            <div>
              {notifications.map((notification, index) => (
                <div key={index} className="p-4 border-b border-gray-300">
                  <p className="font-semibold">{notification.sender.name}</p>
                  <p>{notification.text}</p>
                  <p className="text-xs text-gray-500">{new Date(notification.timestamp).toLocaleTimeString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
