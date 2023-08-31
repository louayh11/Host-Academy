import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GeneralLayout from "./layouts/General";
import UserLayout from "./layouts/user";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<GeneralLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="user/*" element={<UserLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
