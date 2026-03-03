import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, user }) => {

  if (user && Object.keys(user).length > 0) {
    return <Navigate to="/listProduct" replace />;
  }

  return children;
};

export default PublicRoute;