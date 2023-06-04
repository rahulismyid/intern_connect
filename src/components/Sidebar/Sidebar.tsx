import React, { useState } from "react";
import "./sidebar.styles..css";
import HamburgerIcon from "../HamburgerIcon";
import { Link } from "react-router-dom";

export const handleToggleSidebar = (setSidebarOpen: any, sidebarOpen: any) => {
  setSidebarOpen(!sidebarOpen);
};

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div
        className="toggle-btn"
        onClick={() => handleToggleSidebar(setSidebarOpen, sidebarOpen)}
      >
        <HamburgerIcon />
      </div>
      <ul>
        <li>
          <Link to={"/app"}>Home</Link>
        </li>
        <li>
          <Link to={"/userprofile"}>User Profile</Link>
        </li>
        <li>
          <Link to={"/create-project"}>Create Project</Link>
        </li>
        <li>
          <Link to={"/project-list"}>Project List</Link>
        </li>
        <li>
          <Link to={"/message"}>Chat</Link>
        </li>
        <li>
          <Link to={"/discussion"}>Discussion Forum</Link>
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
