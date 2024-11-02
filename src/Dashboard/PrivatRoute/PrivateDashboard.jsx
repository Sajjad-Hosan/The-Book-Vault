import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Providers/AuthProviders";

const PrivateDashboard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const adminUser = users.find((u) => u.email === user?.email);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center w-full h-screen">
          <span className="loading loading-ring w-28 h-28"></span>
        </div>
      </div>
    ); // or a spinner
  }

  if (adminUser?.role === "admin" || adminUser?.role ==="seller" || adminUser?.role ==="user") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateDashboard;