import React, { useState } from "react";
import "./home.styles.css";
import HamburgerIcon from "../../components/HamburgerIcon";
import Feeds from "../../components/Feeds";
import NewsFeeds from "../../components/NewsFeeds";
import { Link } from "react-router-dom";
import { handleToggleSidebar } from "../../components/Sidebar/Sidebar";

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`home`}>
      <div className="content">
        <div onClick={() => handleToggleSidebar(setSidebarOpen, sidebarOpen)}>
          <HamburgerIcon />
        </div>
        <h1>Welcome Home!</h1>
        <div className="container">
          <Feeds />
          <NewsFeeds />
        </div>
      </div>
    </div>
  );
};

export default Home;
