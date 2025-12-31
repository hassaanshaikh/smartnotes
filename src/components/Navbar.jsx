import React from "react";

const Navbar = ({ name, handleLogout }) => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, <b>{name}</b>
        </span>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-1 rounded-lg text-sm hover:bg-gray-800"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
