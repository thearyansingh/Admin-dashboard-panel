import React from "react";
import Layout from "./component/Layout";
import Dashboard from "./pages/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import ProtectedAuth from "./ProtectedRoutes/ProtectedAuth";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { useEffect } from "react";

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} auth={auth} />} />
        <Route
          path="/register"
          element={<Register setAuth={setAuth} auth={auth} />}
        />

        <Route
          element={
            <ProtectedAuth auth={auth}>
              <ErrorBoundary fallback={ErrorFallback}>
              <Layout />
              </ErrorBoundary>
            </ProtectedAuth>
          }
        >
          <Route path="/listProduct" element={<ProductList />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
