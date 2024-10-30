import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { confirmPasswordReset } from "firebase/auth";

const Booklist = () => {
  const axiosSecure = useAxios();
  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["allBooks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBooks");
      return res.data;
    },
  });

  console.log(allBooks);

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
                  <button className="text-red-600 btn text-2xl">
                    <MdDeleteForever />{" "}
                  </button>
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
