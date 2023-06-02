import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from "../Layouts/PrivateLayout";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
  redirectPath: any;
  setRedirectPath: any;
};

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes1 = (props: any) => {
  const auth = useAuth();
  return auth ? (
    <>
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const ProtectedRoutes = ({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};

export default ProtectedRoutes;
