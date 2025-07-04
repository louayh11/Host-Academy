import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GeneralLayout from "./layouts/General";
import UserLayout from "./layouts/user";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import ProtectedRoute from "./layouts/ProtectedRoute/ProtectedRoute";
// import { projectAuth } from "./config/firebase";

const App = () => {
  const userString = localStorage.getItem("user");
  let user = null;
  try {
    user = JSON.parse(userString);
  } catch (e) {
    user = null;
  }
  // Optionnel : vérifie que user a bien un id ou un champ qui prouve la connexion
  const isAuthenticated = user && user.id; // ou user.uid selon ta structure

  return (
    <Routes>
      <Route path="/*" element={<GeneralLayout />} />
      {/* Only show AuthLayout if user is not authenticated */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      {!isAuthenticated && <Route path="auth/*" element={<AuthLayout />} />}

      <Route element={<ProtectedRoute />}>
        <Route path="user/*" element={<UserLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
      </Route>

      <Route path="auth/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
