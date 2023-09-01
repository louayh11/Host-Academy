// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GeneralLayout from "./layouts/General";
import UserLayout from "./layouts/user";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import ProtectedRoute from "./layouts/ProtectedRoute/ProtectedRoute";
import { useUserAuth } from "context/UserAuthContext";
import { getAuth, browserLocalPersistence } from "firebase/auth";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<GeneralLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />

      <Route element={<ProtectedRoute />}>
        <Route path="user/*" element={<UserLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
      </Route>

      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
