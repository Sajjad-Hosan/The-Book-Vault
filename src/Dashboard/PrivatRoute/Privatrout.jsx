import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProviders";
import { fetchusers } from "../GetApi/UserSlice";

const Privatrout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const dispatch = useDispatch();
    // Extracting users and state from the Redux store
    const { users } = useSelector((state) => state.users);
  
    // Fetch users when the component mounts
    useEffect(() => {
      dispatch(fetchusers());
    }, [dispatch]);
  
    const adminUser = users.find((u) => u.email === user?.email);
  
    if (adminUser?.role === "admin") {
      return children;
    } else {
      return <Navigate to="/" state={{ from: location }} />;
    }
  };

export default Privatrout;