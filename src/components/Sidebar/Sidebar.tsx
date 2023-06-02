import React from "react";
import "./sidebar.styles..css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Products</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
