import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-5 text-2xl font-bold border-b border-gray-700">
        SmartNotes
      </div>

      <ul className="mt-6 space-y-2">
        <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
          Dashboard
        </li>
        <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
          Users
        </li>
        <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
          Analytics
        </li>
        <li className="px-6 py-3 hover:bg-gray-800 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
