import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAdminLoggedIn } = useAuth();
  return isAdminLoggedIn ? children : <Navigate to="/admin" replace />;
};
