import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate} from "react-router-dom";


const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  // return isAuthenticated && loading===false ? <Outlet /> : <Navigate to="/login" />;
  return (
    loading === false &&
    (isAuthenticated === false ? (
      <Navigate to="/login" />
    ) : (
       <Outlet />
    ))
  );
};

export default ProtectedRoute;