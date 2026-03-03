import React from "react";
import Layout from "./component/Layout";

import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

import useAuth from "./customHook/useAuth";
import DashBoard from "./pages/DashBoard";
import UserList from "./pages/UserList";
import PrivateRoute from "./ProtectedRoutes/PrivateRoute";
import PublicRoute from "./ProtectedRoutes/PublicRoute";
import AddUsers from "./pages/AddUsers";

const App = () => {
  const { user, setUser } = useAuth();

  console.log(user);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute user={user}>
              <Login user={user} setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route path="/register" element={<Register user={user} />} />

        <Route
          path=""
          element={
            <ErrorBoundary fallback={ErrorFallback}>
              <PrivateRoute user={user}>
                <Layout />
              </PrivateRoute>
            </ErrorBoundary>
          }
        >
          <Route path="/listProduct" element={<ProductList />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/addUsers" element={<AddUsers/>} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
