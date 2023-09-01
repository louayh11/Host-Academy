import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GeneralLayout from "./layouts/General";
import UserLayout from "./layouts/user";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import ProtectedRoute from "./layouts/ProtectedRoute/ProtectedRoute";
import { useUserAuth } from "context/UserAuthContext";
import { projectAuth } from "./config/firebase";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in
        console.log("User is authenticated:", user);
        setIsAuthenticated(true);
      } else {
        // No user is signed in
        console.log("User is not authenticated");
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<GeneralLayout />} />
      {/* Only show AuthLayout if user is not authenticated */}
      {!isAuthenticated && <Route path="auth/*" element={<AuthLayout />} />}

      {isAuthenticated && (
        <Route element={<ProtectedRoute />}>
          <Route path="user/*" element={<UserLayout />} />
          <Route path="admin/*" element={<AdminLayout />} />
        </Route>
      )}

      {/* Redirect to home if user is authenticated and tries to access "auth/" */}
      {isAuthenticated && (
        <Route path="auth/*" element={<Navigate to="/home" replace />} />
      )}

      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
