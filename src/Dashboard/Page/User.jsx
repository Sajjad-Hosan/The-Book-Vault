import React, { useEffect } from "react";
import { fetchusers } from "../GetApi/UserSlice";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const User = () => {
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

  // Function to handle deleting a user
  //handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your users has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting blog:", error);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting your user.",
              icon: "error",
            });
          });
      }
    });
  };

  // Function to handle making a user an admin
  const handleMakeAdmin = (users) => {
    axiosSecure.patch(`/users/admin/${users._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Admin sucesss");
      }
    });
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
                    {user.role === "seller" ? (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-blue-600 btn"
                      >
                        Make a Admin
                      </button>
                    ) : user.role === "admin" || user.role === "user" ? (
                      <button
                        onClick={() => handleMakeSeller(user)}
                        className="text-blue-600 btn"
                      >
                        Make a Seller
                      </button>
                    ) : null}
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className="text-red-600 btn"
                    >
                      Delete
                    </button>
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
                <button
                  onClick={() => handleMakeAdmin(user)}
                  className="text-blue-600 btn"
                >
                  make Admin
                </button>
                <button
                  onClick={() => handleDelete(user)}
                  className="text-red-600 btn"
                >
                  Delete
                </button>
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
