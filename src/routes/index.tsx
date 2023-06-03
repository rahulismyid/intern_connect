import { Route, Routes } from "react-router-dom";
import ProtectedRoutes, { ProtectedRouteProps } from "./ProtectedRoute";
import { useSessionContext } from "../context/SessionContext";
import LoginPage from "../components/LoginPage/LoginPage";
import Home from "../pages/Home/Home";
import UserProfile from "../pages/UserProfile";
import CreateProjectForm from "../pages/CreateProjectForm";
import ProjectList from "../pages/ProjectList";
import ChatPage from "../pages/ChatPage";
import PublicRoutes from "./PublicRoute";
import Registration from "../components/Registration";

const RouterComponent = () => {
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
          <ProtectedRoutes {...defaultProtectedRouteProps} outlet={<Home />} />
        }
      />
      <Route
        path="userprofile"
        element={
          <ProtectedRoutes
            {...defaultProtectedRouteProps}
            outlet={<UserProfile />}
          />
        }
      />
      <Route
        path="create-project"
        element={
          <ProtectedRoutes
            {...defaultProtectedRouteProps}
            outlet={<CreateProjectForm />}
          />
        }
      />
      <Route
        path="project-list"
        element={
          <ProtectedRoutes
            {...defaultProtectedRouteProps}
            outlet={<ProjectList />}
          />
        }
      />
      <Route
        path="message"
        element={
          <ProtectedRoutes
            {...defaultProtectedRouteProps}
            outlet={<ChatPage />}
          />
        }
      />
      <Route path="/" element={<PublicRoutes />}>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="registration" element={<Registration />}></Route>
      </Route>
    </Routes>
  );
};

export default RouterComponent;
