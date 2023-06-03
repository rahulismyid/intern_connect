import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SessionContextProvider } from "./context/SessionContext";
import Sidebar from "./components/Sidebar/Sidebar";
import RouterComponent from "./routes";
import "./App.css";

const App: FC = () => {
  return (
    <div className="app-container">
      <Router>
        <SessionContextProvider>
          <Sidebar />
          <RouterComponent />
        </SessionContextProvider>
      </Router>
    </div>
  );
};

export default App;
