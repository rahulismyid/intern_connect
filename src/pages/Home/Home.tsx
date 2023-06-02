import React, { useState } from "react";
import "./home.styles.css";
import HamburgerIcon from "../../components/HamburgerIcon";
import Feeds from "../../components/Feeds";
import NewsFeeds from "../../components/NewsFeeds";

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`home`}>
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="toggle-btn" onClick={handleToggleSidebar}>
          <HamburgerIcon />
        </div>
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <div onClick={handleToggleSidebar}>
          <HamburgerIcon />
        </div>
        <h1>Welcome Home!</h1>
        {/* <p>Content goes here...</p> */}
        <div className="container">
          <div className="content">
            <Feeds />
            <NewsFeeds />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Home;
