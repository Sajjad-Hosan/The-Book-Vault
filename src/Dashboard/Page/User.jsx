import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchusers } from "../GetApi/UserSlice";

const User = () => {
  const { users, isLoading, isError, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  // Function to handle deleting a user
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        dispatch(fetchusers());
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle making a user an admin
  const handleMakeAdmin = async (userId) => {
    try {
      const response = await fetch(`/api/user/${userId}/make-admin`, {
        method: "PATCH",
      });

      if (response.ok) {
        dispatch(fetchusers());
      } else {
        console.error("Failed to update user role");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  let content;
  if (isLoading) {
    content = (
      <div className=" flex justify-center">
        <span className="loading loading-infinity w-36 text-red-500"></span>
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && users.length === 0) {
    content = <h1>No users found</h1>;
  }
  if (!isLoading && !isError && users.length > 0) {
    content = (
      <div className="p-6 bg-gray-150 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>

        {/* Table for larger screens */}
        <div className="overflow-x-auto hidden lg:block">
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex gap-5">
                    <button onClick={() => handleMakeAdmin(user.id)} className="text-blue-600 btn">Make Admin</button>
                    <button onClick={() => handleDelete(user.id)} className="text-red-600 btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grid for smaller screens */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded-lg shadow-md">
              <div className="mb-2">
                <span className="font-bold">User Name:</span> {user.name}
              </div>
              <div className="mb-2">
                <span className="font-bold">Email:</span> {user.email}
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 btn">Seller</button>
                <button onClick={() => handleMakeAdmin(user.id)} className="text-blue-600 btn">make Admin</button>
                <button onClick={() => handleDelete(user.id)} className="text-red-600 btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default User;
