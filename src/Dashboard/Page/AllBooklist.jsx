import React, { useContext } from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { confirmPasswordReset } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllBooklist = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();

  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["allBooks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBooks");
      return res.data;
    },
  });

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
          .delete(`/blog/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your blog has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting blog:", error);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting your blog.",
              icon: "error",
            });
          });
      }
    });
  };

  //books Decline
  const handleDecline = (blogs) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Decline this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, decline it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/books/decline/${blogs._id}`).then((res) => {
          console.log(blogs._id);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Decline!",
              text: "Your Books has been decline.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  //books Approve
  const handleApprove = (books) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/books/approved/${books._id}`).then((res) => {
          console.log(books._id);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Approved",
              text: "Your books has been Approved.",
              icon: "success",
            });
            refetch();
            toast.success("Books Approved Success");
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      {/* Table for larger screens */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="min-w-full text-left table-auto">
          <thead>
            <tr className="border-b bg-gray-300 ">
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock Status</th>
              <th className="px-4 py-2">Actions</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            {allBooks?.map((data, index) => (
              <tr className="border-b">
                <td className="px-4 py-2">{data?.title}</td>
                <td className="px-4 py-2">{data?.author}</td>
                <td className="px-4 py-2">Classic</td>
                <td className="px-4 py-2">${data?.price}</td>
                <td className="px-4 py-2">
                  <span className="text-green-600 font-semibold">In Stock</span>
                </td>
                <td className="px-4 py-2 flex gap-5">
                  <button className="text-blue-600 btn text-2xl">
                    <MdEditDocument />{" "}
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-red-600 btn text-2xl"
                  >
                    <MdDeleteForever />{" "}
                  </button>
                </td>
                <td>
                  {data?.status === "pending" || data?.status === "Decline" ? (
                    <button
                      onClick={() => handleApprove(data)}
                      className="text-green-600 btn text-xl"
                    >
                      Approve
                    </button>
                  ) : data?.status === "approve" ? (
                    <button
                      onClick={() => handleDecline(data)}
                      className="text-red-600 btn text-2xl"
                    >
                      Decline
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grid for smaller screens */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {/* Book 1 */}
        <div className="border p-4 rounded-lg shadow-md">
          <div className="mb-2">
            <span className="font-bold">Book Title:</span> The Great Gatsby
          </div>
          <div className="mb-2">
            <span className="font-bold">Author:</span> F. Scott Fitzgerald
          </div>
          <div className="mb-2">
            <span className="font-bold">Category:</span> Classic
          </div>
          <div className="mb-2">
            <span className="font-bold">Price:</span> $10.99
          </div>
          <div className="mb-2">
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 btn">Edit</button>
            <button className="text-red-600 btn">Delete</button>
          </div>
        </div>

        {/* Book 2 */}
        <div className="border p-4 rounded-lg shadow-md">
          <div className="mb-2">
            <span className="font-bold">Book Title:</span> 1984
          </div>
          <div className="mb-2">
            <span className="font-bold">Author:</span> George Orwell
          </div>
          <div className="mb-2">
            <span className="font-bold">Category:</span> Dystopian
          </div>
          <div className="mb-2">
            <span className="font-bold">Price:</span> $8.99
          </div>
          <div className="mb-2">
            <span className="text-red-600 font-semibold">Out of Stock</span>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 btn">Edit</button>
            <button className="text-red-600 btn">Delete</button>
          </div>
        </div>

        {/* Book 3 */}
        <div className="border p-4 rounded-lg shadow-md">
          <div className="mb-2">
            <span className="font-bold">Book Title:</span> To Kill a Mockingbird
          </div>
          <div className="mb-2">
            <span className="font-bold">Author:</span> Harper Lee
          </div>
          <div className="mb-2">
            <span className="font-bold">Category:</span> Fiction
          </div>
          <div className="mb-2">
            <span className="font-bold">Price:</span> $12.50
          </div>
          <div className="mb-2">
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 btn">Edit</button>
            <button className="text-red-600 btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooklist;
