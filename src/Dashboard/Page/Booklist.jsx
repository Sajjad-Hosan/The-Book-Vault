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

  const handleUpdateBooks = async (book) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Book Details",
      html: `
        <input id="title" class="swal2-input" placeholder="Title" value="${book.title}">
        <input id="author" class="swal2-input" placeholder="Author" value="${book.author}">
        <input id="price" class="swal2-input" placeholder="Price" type="number" value="${book.price}">
        <input id="genre" class="swal2-input" placeholder="Genre" value="${book.genre}">
        <input id="status" class="swal2-input" placeholder="Status" value="${book.status}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: document.getElementById("title").value,
          author: document.getElementById("author").value,
          price: document.getElementById("price").value,
          genre: document.getElementById("genre").value,
          status: document.getElementById("status").value,
        };
      },
    });

    if (formValues) {
      try {
        await axiosSecure.patch(`/booksupdate/${book._id}`, formValues);
        Swal.fire("Success!", "Book details updated successfully.", "success");
        refetch(); // Refresh the list to show updated details
      } catch (error) {
        Swal.fire("Error", "Failed to update book details", "error");
        console.error("Error updating book:", error);
      }
    }
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
                  <button onClick={handleUpdatebooks}
                      className="text-green-600 btn text-2xl">
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
