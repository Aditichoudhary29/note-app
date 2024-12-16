import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { auth } = useAuth();

  return auth ? <>{children}</> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
