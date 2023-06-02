import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Test from "./components/Test";
import ProtectedRoutes, { ProtectedRouteProps } from "./routes/ProtectedRoute";
import PublicRoutes from "./routes/PublicRoute";
import "./App.css";

import {
  SessionContextProvider,
  useSessionContext,
} from "./context/SessionContext";
import Home from "./pages/Home/Home";
import Registration from "./components/Registration";

const App: FC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  if (!sessionContext.redirectPath) {
    setRedirectPath("dashboard");
  }

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <div className="App">
      <Router>
        <SessionContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes
                  {...defaultProtectedRouteProps}
                  outlet={<LoginPage />}
                />
              }
            />
            <Route
              path="app"
              element={
                <ProtectedRoutes
                  {...defaultProtectedRouteProps}
                  outlet={<Home />}
                />
              }
            />
            <Route path="/" element={<PublicRoutes />}>
              <Route path="login" element={<LoginPage />}></Route>
              <Route path="registration" element={<Registration />}></Route>
            </Route>
          </Routes>
        </SessionContextProvider>
      </Router>
    </div>
  );
};

export default App;
