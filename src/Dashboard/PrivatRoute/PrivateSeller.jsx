import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProviders";
import { fetchusers } from "../GetApi/UserSlice";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const PrivateSeller = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const {
    data: users = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  // Handle loading and error states
  if (authLoading) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  if (error) {
    return <div>Error fetching users: {error.message}</div>; // Handle error state
  }

  const adminUser = users.find((u) => u.email === user?.email);

  // Check if the user has either the admin or seller role
  if (adminUser?.role === "admin" || adminUser?.role === "seller") {
    return children; // Render children if the user is an admin or seller
  } else {
    return <div>This page not Found</div>; // Render message if access is denied
  }
};

export default PrivateSeller;
