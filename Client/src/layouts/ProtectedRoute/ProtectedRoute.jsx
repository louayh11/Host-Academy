import { Outlet, useLocation, Navigate } from "react-router-dom";

const PrivateRoutesLayout = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
