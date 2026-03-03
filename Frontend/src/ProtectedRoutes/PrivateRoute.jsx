import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {

  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;