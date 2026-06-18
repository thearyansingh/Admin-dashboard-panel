import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user,userRoles }) => {

  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/" replace />;
  }
  if(userRoles&& userRoles!=="admin")
    return  <Navigate to="/listProduct" replace />;

  

  return children;
};

export default PrivateRoute;