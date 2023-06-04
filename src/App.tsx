import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { SessionContextProvider } from "./context/SessionContext";
import Sidebar from "./components/Sidebar/Sidebar";
import RouterComponent from "./routes";

import "./App.css";

const AppContainer = styled.div`
  display: flex;
`;

const App: FC = () => {
  return (
    <AppContainer>
      <Router>
        <SessionContextProvider>
          <Sidebar />
          <RouterComponent />
        </SessionContextProvider>
      </Router>
    </AppContainer>
  );
};

export default App;
