import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProviders";
import { fetchusers } from "../GetApi/UserSlice";

const PrivateSeller = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const dispatch = useDispatch();
  
  // Extracting users and loading state from the Redux store
  const { users, loading: usersLoading, error } = useSelector((state) => state.users);  

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  // Handle loading and error states
  if (authLoading || usersLoading) {
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
