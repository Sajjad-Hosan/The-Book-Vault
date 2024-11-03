import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProviders";
import { fetchusers } from "../GetApi/UserSlice";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Privatrout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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
  
    const adminUser = users.find((u) => u.email === user?.email);
    console.log(adminUser);
  
    if (adminUser?.role === "admin") {
      return children;
    } 
    else {
      return <><div>This page not Found</div></>;
    }
  };

export default Privatrout;