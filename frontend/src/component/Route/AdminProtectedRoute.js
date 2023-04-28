import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ isAdmin  }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  // return isAuthenticated && loading===false ? <Outlet /> : <Navigate to="/login" />;

  return (
    isAuthenticated === true && loading===false
        ? user.role==='admin' && isAdmin===true ? <Outlet /> : <Navigate to="/login" />
            : <Navigate to="/login" />
  );
};

export default AdminProtectedRoute;
