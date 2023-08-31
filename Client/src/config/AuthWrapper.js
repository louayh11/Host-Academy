// AuthWrapper.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { projectAuth } from "../config/firebase";

const AuthWrapper = ({ children }) => {
  const { currentUser } = projectAuth;
  console.log("currentUser:", currentUser);
  const location = useLocation(); // Use the useLocation hook here

  if (currentUser && location.pathname.startsWith("/auth")) {
    return <Navigate to="/user" replace />;
  }

  return children;
};

export default AuthWrapper;
