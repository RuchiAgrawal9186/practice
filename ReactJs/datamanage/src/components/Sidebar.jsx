import React from "react";

const Sidebar = ({ categories }) => {
  return (
    <div className="w-64 bg-gray-100  p-4">
      <h3 className="font-semibold mb-4">Categories</h3>
      <ul className="space-y-2 text-sm">
        {categories.map((c) => (
          <li key={c} className="hover:text-indigo-600 cursor-pointer">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
