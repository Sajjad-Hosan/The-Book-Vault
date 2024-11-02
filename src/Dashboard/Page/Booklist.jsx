import React, { useContext } from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { confirmPasswordReset } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";

const Booklist = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();

  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["allBooks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBooks");
      return res.data;
    },
  });

  const handleMakeApprove = (blogs) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/blog/aproved/${blogs._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Approved!",
              text: "Your book has been Approved.",
              icon: "success",
            });
            refetch();
            toast.success("blog Approved Sucesss");
          }
        });
      }
    });
  };

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

  //blogs Decline
  const handleDecline = (blogs) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, decline it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/blog/decline/${blogs._id}`).then((res) => {
          console.log(blogs._id);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Decline!",
              text: "Your blog has been decline.",
              icon: "success",
            });
            refetch();
            toast.success("Blog Decline Success");
          }
        });
      }
    });
  };

  // Find email of self books
  const booksuser = allBooks.filter((b) => b.email === user?.email);
  console.log(booksuser);

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
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            {booksuser?.map((data, index) => (
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
                  <button className="text-red-600 btn text-2xl">
                    <MdDeleteForever />{" "}
                  </button>
                  {data?.status === "pending" || data?.status === "decline" ? (
                    <button
                      onClick={handleApprove}
                      className="text-green-600 btn text-2xl"
                    >
                      Approve
                    </button>
                  ) : data?.status === "Approved" ? (
                    <button
                      onClick={handleDecline}
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

export default Booklist;
