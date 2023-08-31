// AuthWrapper.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const AuthWrapper = ({ children }) => {
  const { user } = useUserAuth();
  console.log("currentUser:", user);
  const location = useLocation(); // Use the useLocation hook here

  if (user && location.pathname.startsWith("/auth")) {
    return <Navigate to="/user" replace />;
  }

  return children;
};

export default AuthWrapper;
