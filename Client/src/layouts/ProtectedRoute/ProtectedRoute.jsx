import { Outlet, useLocation, Navigate } from "react-router-dom";
import { projectAuth } from "../../config/firebase";
import { useUserAuth } from "../../context/UserAuthContext";

const PrivateRoutesLayout = () => {
  const location = useLocation();

  return projectAuth.currentUser ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
